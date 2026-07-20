import React from "react";
import {
  Globe,
  Code,
  Search,
  Layout,
  Layers,
  Gauge,
  Rocket,
  Wrench,
  Plug,
  Database,
  Server,
  ShieldCheck,
  TrendingUp,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Settings,
  Sparkles,
  Target,
  Users,
  Zap,
  Check,
  Link as LinkIcon,
  type LucideIcon,
} from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import type { IconType } from "react-icons";

// Curated, static — every entry is a named import above so tree-shaking
// keeps only the icons actually used. Never add a dynamic/whole-library import.
const LUCIDE_ICONS: Record<string, LucideIcon> = {
  globe: Globe,
  code: Code,
  search: Search,
  layout: Layout,
  layers: Layers,
  gauge: Gauge,
  rocket: Rocket,
  wrench: Wrench,
  plug: Plug,
  database: Database,
  server: Server,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  "file-text": FileText,
  "message-circle": MessageCircle,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  settings: Settings,
  sparkles: Sparkles,
  target: Target,
  users: Users,
  zap: Zap,
  check: Check,
  link: LinkIcon,
};

// Brand marks aren't in Lucide's scope — routed through the same Icon API
// via react-icons (already a project dependency) so editors pick from one
// flat iconName list regardless of which icon set actually renders.
const BRAND_ICONS: Record<string, IconType> = {
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
};

export const ICON_NAMES = Object.keys(LUCIDE_ICONS);
export const BRAND_ICON_NAMES = Object.keys(BRAND_ICONS);
export const ALL_ICON_NAMES = [...ICON_NAMES, ...BRAND_ICON_NAMES];

type Props = {
  name?: string | null;
  size?: number;
  className?: string;
};

const Icon: React.FC<Props> = ({ name, size = 24, className }) => {
  if (!name) return null;

  const LucideCmp = LUCIDE_ICONS[name];
  if (LucideCmp) {
    return (
      <LucideCmp size={size} strokeWidth={1.5} color="currentColor" className={className} />
    );
  }

  const BrandCmp = BRAND_ICONS[name];
  if (BrandCmp) {
    return <BrandCmp size={size} color="currentColor" className={className} />;
  }

  return null;
};

export default Icon;
