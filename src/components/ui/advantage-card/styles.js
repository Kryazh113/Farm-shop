import styled from "styled-components";
import { Section, Img } from "/src/components/styled";

export const Feature = styled(Section)`
  box-sizing: border-box;
  height: 197px;
  display: grid;
  grid-template-columns: 52px 1fr;
  column-gap: ${(props) => props.theme.indent};
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  padding: ${(props) => props.theme.indent};
`;

export const CardTitleWrapper = styled.div`
  grid-column: 2/-1;
`;

export const CardIcon = styled(Img)`
  grid-column: 1/2;
`;

export const FeatureOwner = styled.span`
  font-size: 14px;
  line-height: 150%;
  min-width: 158px;
  min-height: 21px;
  display: inline-block;
  padding: 2px 10px;
  color: #ffffff;
  background-color: ${(props) => (props.isNegative ? "#f75531" : "#88aa4d")};
  margin-bottom: 6px;
`;

export const CardText = styled.p`
  padding: 0px;
  margin: 0px;
  margin-top: ${(props) => props.theme.indent};
  grid-column: 1/-1;
  font-size: ${(props) => props.theme.fontSizeDefauilt};
`;
