import styled from "styled-components";

const Section = styled.section`
  display: flex;
  padding-left: ${(props) => props.theme.PagePadding};
  padding-right: ${(props) => props.theme.PagePadding};
  position: relative;
  box-sizing: border-box;
`;

export default Section;
