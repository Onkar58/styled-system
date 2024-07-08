import React, {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { FC } from "react";
import { config } from "../config";

export type ButtonProps = {
  css?: CSSProperties;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = ({ css, onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const changeToPointer = useCallback(() => {
    setIsHovered(true);
  }, []);
  const changeToAuto = useCallback(() => {
    setIsHovered(false);
  }, []);
  return (
    <button
      onMouseOver={changeToPointer}
      onMouseOut={changeToAuto}
      onClick={onClick}
      style={{
        cursor: isHovered ? "pointer" : "auto",
        border: `2px solid ${config.primaryBorderColor}`,
        ...css,
      }}
    >
      {children || "Button"}
    </button>
  );
};
