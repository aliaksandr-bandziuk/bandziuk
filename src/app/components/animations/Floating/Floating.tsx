import React, { ReactElement } from "react";
import styles from "./Floating.module.scss";

type Props = {
  children: ReactElement;
};

// Endless drift in CSS keyframes: runs on the compositor, needs no JS. The
// framer-motion version kept the main thread busy on every frame.
const Floating = ({ children }: Props) => {
  return <div className={styles.floating}>{children}</div>;
};

export default Floating;
