import React, { CSSProperties, FC } from "react";

export type TextProps = {
  children: string;
  css?: CSSProperties;
};

export const Text: FC<TextProps> = ({ children }) => {
  return <p>{children}</p>;
};
