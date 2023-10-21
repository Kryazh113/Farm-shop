import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  height: 44px;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Text = styled.span`
  display: flex;
  color: ${(props) => props.theme.colorBlackForText};
  margin-left: 24px;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;
