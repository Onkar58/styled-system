import React, { CSSProperties, FC, ReactNode } from "react";

export type BoxProps = {
  position?: CSSProperties["position"];
  css?: CSSProperties;
  children: ReactNode;
};

export const Box: FC<BoxProps> = ({ position, css, children }) => {
  return <div style={{ position: position, ...css }}>{children}</div>;
};
