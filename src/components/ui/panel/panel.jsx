import styled from "styled-components";
import { Section } from "/src/components/styled";

export const Panel = styled(Section)`
  display: flex;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  width: ${(props) => props.$width || "auto"};
  background-color: #ffffff;
`;

export default Panel;
