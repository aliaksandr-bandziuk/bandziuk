import React from "react";
import styles from "./LinkPrimary.module.scss";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  link: string;
};

const LinkPrimary = ({ children, link }: Props) => {
  return (
    <Link type="button" className={styles.btn} href={link}>
      <span className={styles.btnText}>{children}</span>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </Link>
  );
};

export default LinkPrimary;
