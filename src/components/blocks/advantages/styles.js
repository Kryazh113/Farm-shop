import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";

export const AdvantagesList = styled(Section)`
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const AdvantageList = styled(Ul)`
  margin-left: -20px;
  list-style: none;
  padding: 0;
  margin-top: 42px;
  margin-bottom: 64px;
`;

export const AdvantegeItem = styled(Li)`
  width: 540px;
  height: 197px;
  margin-top: 20px;
  margin-left: 20px;
  display: inline-block;
`;
