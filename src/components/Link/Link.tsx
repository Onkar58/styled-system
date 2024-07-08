import React, { CSSProperties } from "react";
import { FC, ReactNode } from "react";

export type LinkProps = {
  href: string;
  target?: HTMLAnchorElement["target"];
  css?: CSSProperties;
  children: ReactNode;
};

export const Link: FC<LinkProps> = ({ css, children, ...props }) => {
  return (
    <a style={{ textDecoration: "none", color: "#000", ...css }} {...props}>
      {children}
    </a>
  );
};
