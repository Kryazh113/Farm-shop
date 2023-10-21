import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 10px;
  padding-bottom: 10px;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeigth};
  margin: 0 auto;
  position: relative;
  justify-content: space-between;
  background: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
  box-sizing: border-box;
`;
