import React, { FC } from "react";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";

interface StickyStackProps {
  children: React.ReactNode[];
  offset?: number; // отступ при прилипании
  spacing?: number; // шаг между стопками
  animate?: boolean;
}

// Cards stick one above another as the section scrolls. The reveal uses the
// CSS FadeInOnScroll (cards already on screen at load are not hidden); the
// framer-motion version pulled that library into the page for this alone.
const StickyStack: FC<StickyStackProps> = ({
  children,
  offset = 120,
  spacing = 50,
  animate = true,
}) => {
  const arr = React.Children.toArray(children);

  return (
    <div style={{ position: "relative" }}>
      {arr.map((child, i) => {
        const top = offset + spacing * i;
        const zIndex = arr.length + i;

        return (
          <React.Fragment key={(child as any).key ?? i}>
            {/* Карточка с sticky */}
            <div style={{ position: "sticky", top, zIndex }}>
              {animate ? (
                <FadeInOnScroll index={i} yOffset={20}>
                  {child}
                </FadeInOnScroll>
              ) : (
                child
              )}
            </div>

            {/* Spacer — невидимый отступ между карточками */}
            <div style={{ height: spacing }} aria-hidden="true" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StickyStack;
