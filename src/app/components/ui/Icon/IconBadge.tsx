import React from "react";
import styles from "./IconBadge.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const IconBadge: React.FC<Props> = ({ className, children }) => {
  const classes = [styles.iconBadge, className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
};

export default IconBadge;
