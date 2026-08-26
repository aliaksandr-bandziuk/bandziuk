"""
Composites site screenshots into the device mockup used on existing
portfolio covers (desktop monitor + laptop + tablet + phone).

Usage:
    python scripts/build-portfolio-cover.py scripts/cover-configs/<case>.json

Config format. All paths in a config are resolved relative to the config
file's own directory, so a config can be moved together with its source
screenshots.

{
  "background_color": "#FFFFFF",     // hex string, any run-specific tone
  "output_size": [2000, 1126],       // optional, defaults to 2000x1126
  "jpeg_quality": 88,                // optional, defaults to 88
  "output_dir": "output",            // optional, defaults to the config's own directory
  "output_name": "orzel-realty",     // optional, defaults to the config filename stem
  "slots": {
    "desktop": { "source": "shots/desktop-homepage.png", "crop_anchor": "top" },
    "laptop":  { "source": "shots/laptop-homepage.png" },
    "tablet":  { "source": "shots/tablet-homepage.png" },
    "mobile":  { "source": "shots/mobile-calculator.png", "crop_anchor": "middle" }
  }
}

Any slot may be omitted entirely — its screen stays empty, exactly as it is
in the template. "crop_anchor" is "top" (default), "middle", or "bottom".

Each slot also accepts "corner_radius" (pixels, in that slot's own size —
e.g. 0-211 for mobile) to override the slot's default (0 for desktop/laptop/
tablet, tuned to match the phone bezel for mobile — see SLOTS below). Only
needed if a particular case's mockup ever needs a different curve than the
template's own.
"""

import argparse
import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw

SCRIPT_DIR = Path(__file__).resolve().parent
ASSETS_DIR = SCRIPT_DIR / "images"
BACK_LAYER = ASSETS_DIR / "mockup_back.png"
FRONT_LAYER = ASSETS_DIR / "mockup_front.png"

CANVAS_SIZE = (3000, 2000)

# Exact, verified against the template. Not derived from the config —
# these are fixed properties of mockup_back.png / mockup_front.png.
#
# "radius" is the default corner radius applied to the screenshot before it's
# pasted, so its corners sit under the device's own rounded bezel instead of
# poking past it. Desktop/laptop/tablet bezels are thick enough relative to
# their corner radius that a square screenshot never reaches the curve — 0 is
# correct for those. mobile's radius (68px, in this slot's own pixel space)
# was tuned by rendering and inspecting the corners at native resolution
# against mockup_front.png's actual curve, not measured off the source PSD.
# 60 still left a faint sliver past the bezel; 90 visibly over-rounded and
# clipped nav text; 68 was clean with a small margin either side.
SLOTS = {
    "desktop": {"size": (1583, 900), "pos": (661, 366), "radius": 0},
    "tablet": {"size": (563, 788), "pos": (264, 885), "radius": 0},
    "laptop": {"size": (890, 560), "pos": (1801, 1055), "radius": 0},
    "mobile": {"size": (211, 452), "pos": (871, 1223), "radius": 68},
}

DEFAULT_OUTPUT_SIZE = (2000, 1126)
DEFAULT_JPEG_QUALITY = 88
DEFAULT_BACKGROUND = "#FFFFFF"


def hex_to_rgb(hex_color):
    h = hex_color.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def fit_and_crop(img, target_size, anchor="top"):
    """Resize to fill target_size preserving aspect ratio, then crop the
    overflow. Vertical overflow is cropped per `anchor` (top keeps the top
    of the source and drops the bottom — the header/hero of a page capture.
    Horizontal overflow, if any, is always center-cropped."""
    target_w, target_h = target_size
    src_w, src_h = img.size
    scale = max(target_w / src_w, target_h / src_h)
    scaled_w, scaled_h = round(src_w * scale), round(src_h * scale)
    img = img.resize((scaled_w, scaled_h), Image.LANCZOS)

    x0 = (scaled_w - target_w) // 2  # always center horizontally

    if anchor == "top":
        y0 = 0
    elif anchor == "bottom":
        y0 = scaled_h - target_h
    elif anchor == "middle":
        y0 = (scaled_h - target_h) // 2
    else:
        raise ValueError(f"Unknown crop_anchor: {anchor!r} (use top / middle / bottom)")

    return img.crop((x0, y0, x0 + target_w, y0 + target_h))


def round_corners(img, radius):
    """Returns img with its alpha channel masked to a rounded rectangle, so
    its corners sit under a device's curved bezel instead of poking past it.
    radius == 0 returns img unchanged."""
    if radius <= 0:
        return img
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [(0, 0), (img.width - 1, img.height - 1)], radius=radius, fill=255
    )
    img = img.copy()
    img.putalpha(mask)
    return img


def build_cover(config, config_path):
    base_dir = config_path.parent

    background_color = hex_to_rgb(config.get("background_color", DEFAULT_BACKGROUND))
    output_size = tuple(config.get("output_size", DEFAULT_OUTPUT_SIZE))
    jpeg_quality = config.get("jpeg_quality", DEFAULT_JPEG_QUALITY)
    output_dir = base_dir / config.get("output_dir", "output")
    output_name = config.get("output_name", config_path.stem)

    back = Image.open(BACK_LAYER).convert("RGBA")
    front = Image.open(FRONT_LAYER).convert("RGBA")
    if back.size != CANVAS_SIZE or front.size != CANVAS_SIZE:
        raise ValueError(
            f"mockup_back.png / mockup_front.png must both be {CANVAS_SIZE}, "
            f"got back={back.size} front={front.size}"
        )

    # 1. Background colour, full canvas, fully opaque.
    canvas = Image.new("RGBA", CANVAS_SIZE, background_color + (255,))
    # 2. mockup_back.png (device bodies, shadows, empty screens).
    canvas.alpha_composite(back)

    # 3. The screenshots, one per configured slot.
    slots_config = config.get("slots", {})
    unknown = set(slots_config) - set(SLOTS)
    if unknown:
        raise ValueError(f"Unknown slot name(s) in config: {sorted(unknown)} (valid: {sorted(SLOTS)})")

    for slot_name, slot_config in slots_config.items():
        slot = SLOTS[slot_name]
        source_path = base_dir / slot_config["source"]
        anchor = slot_config.get("crop_anchor", "top")
        radius = slot_config.get("corner_radius", slot["radius"])

        shot = Image.open(source_path).convert("RGBA")
        shot = fit_and_crop(shot, slot["size"], anchor)
        shot = round_corners(shot, radius)

        layer = Image.new("RGBA", CANVAS_SIZE, (0, 0, 0, 0))
        layer.paste(shot, slot["pos"])
        canvas.alpha_composite(layer)

    # 4. mockup_front.png (phone body + camera notch) — must be last, or it
    #    covers the phone bezel with the mobile screenshot underneath it.
    canvas.alpha_composite(front)

    # 5. Resize to the output size without distortion: center-crop to the
    #    target aspect ratio first (the template canvas is 3:2, the output
    #    default is ~16:9 — the two don't match), then scale down.
    target_w, target_h = output_size
    target_ratio = target_w / target_h
    canvas_w, canvas_h = canvas.size
    canvas_ratio = canvas_w / canvas_h

    if abs(canvas_ratio - target_ratio) > 1e-6:
        if canvas_ratio > target_ratio:
            # canvas is relatively wider than target -> crop width
            new_w = round(canvas_h * target_ratio)
            x0 = (canvas_w - new_w) // 2
            canvas = canvas.crop((x0, 0, x0 + new_w, canvas_h))
        else:
            # canvas is relatively taller than target -> crop height
            new_h = round(canvas_w / target_ratio)
            y0 = (canvas_h - new_h) // 2
            canvas = canvas.crop((0, y0, canvas_w, y0 + new_h))

    canvas = canvas.resize(output_size, Image.LANCZOS)

    output_dir.mkdir(parents=True, exist_ok=True)
    png_path = output_dir / f"{output_name}.png"
    jpg_path = output_dir / f"{output_name}.jpg"

    canvas.save(png_path)
    canvas.convert("RGB").save(jpg_path, quality=jpeg_quality)

    return png_path, jpg_path


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("config", help="Path to a case's JSON config file")
    args = parser.parse_args()

    config_path = Path(args.config).resolve()
    if not config_path.exists():
        print(f"Config not found: {config_path}", file=sys.stderr)
        sys.exit(1)

    with open(config_path, "r", encoding="utf-8") as f:
        config = json.load(f)

    png_path, jpg_path = build_cover(config, config_path)
    print(f"Wrote {png_path}")
    print(f"Wrote {jpg_path}")


if __name__ == "__main__":
    main()
