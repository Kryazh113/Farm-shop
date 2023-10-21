import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 0;
  padding-bottom: 0%;
  height: ${(props) => props.theme.footerHeight};
  width: 1100px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
`;
