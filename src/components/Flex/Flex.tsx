import React, { CSSProperties, FC, ReactNode } from "react";
export type FlexProps = {
  children: ReactNode;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  direction?: CSSProperties["direction"];
  css?: CSSProperties;
};
export const Flex: FC<FlexProps> = ({
  alignItems,
  justifyContent,
  direction,
  css,
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: alignItems,
        justifyContent: justifyContent,
        direction: direction,
        ...css,
      }}
    >
      {children}
    </div>
  );
};
