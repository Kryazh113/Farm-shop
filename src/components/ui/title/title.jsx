import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  LITTLE: "little",
  DEFAULT: ""
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};

function Title({ children, size, className, level = 1 }) {
  return (
    <StyledTitle as={`h${level}`} $size={size} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
