import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  background-color: ${(props) => props.theme.colorForButtonOrange};
  color: ${(props) => props.theme.colorWhite};
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  min-height: 60px;
  text-align: center;
  text-decoration: none;
  line-height: 58px;
  padding: 0px 24px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefauilt};
  border: none;
  box-shadow: "none";
  background-image: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.colorForButtonOrange};
  }
`;
