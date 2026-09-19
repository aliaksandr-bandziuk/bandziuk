"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import fullStyles from "../FormFullBlockComponent/FormFullBlockComponent.module.scss";
import minimalStyles from "../FormMinimalBlockComponent/FormMinimalBlockComponent.module.scss";

// Form blocks inside page content bring Formik, Yup and the phone input
// (~60 KB). The block's shell and its H2 are rendered on the server as usual;
// the form itself loads when the visitor scrolls within ~800px of it.
const FormFullBlockComponent = dynamic(() => import("../FormFullBlockComponent/FormFullBlockComponent"), {
  ssr: false,
});
const FormMinimalBlockComponent = dynamic(
  () => import("../FormMinimalBlockComponent/FormMinimalBlockComponent"),
  { ssr: false },
);

type Props = {
  variant: "full" | "minimal";
  form: any;
  title?: string;
  lang: string;
  offerButtonCustomText?: string;
};

const FormBlockOnView = ({ variant, ...props }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        setShow(true);
      },
      { rootMargin: "800px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (show) {
    return variant === "full" ? <FormFullBlockComponent {...props} /> : <FormMinimalBlockComponent {...props} />;
  }

  // Same shell and heading the real component renders, so the H2 is in the
  // server HTML and nothing above the form moves when it arrives.
  const styles = variant === "full" ? fullStyles : minimalStyles;
  return (
    <div ref={ref} className={variant === "full" ? styles.formFullBlock : styles.formMinimalBlock}>
      <div className="container">
        {props.title && (
          <div className={styles.text}>
            <h2 className={styles.title}>{props.title}</h2>
          </div>
        )}
        <div className={styles.indirect} style={{ minHeight: 360 }} />
      </div>
    </div>
  );
};

export default FormBlockOnView;
