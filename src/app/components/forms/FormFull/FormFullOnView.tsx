"use client";

import dynamic from "next/dynamic";
import React, { ComponentProps, useEffect, useRef, useState } from "react";
import type FormFullType from "./FormFull";

// The contact form sits in the footer of every page and brings Formik and Yup
// with it. It is loaded when the visitor scrolls within ~800px of it, so it
// stays out of the first load. The placeholder keeps roughly its height.
const FormFull = dynamic(() => import("./FormFull"), { ssr: false });

type Props = ComponentProps<typeof FormFullType>;

const FormFullOnView = (props: Props) => {
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

  return <div ref={ref}>{show ? <FormFull {...props} /> : <div style={{ minHeight: 420 }} />}</div>;
};

export default FormFullOnView;
