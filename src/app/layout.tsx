import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bandziuk - Full Stack Developer & SEO Manager",
  description:
    "Full Stack Developer with a focus on SEO optimization, creating high-performance web applications and enhancing online visibility.",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
