import styled from "styled-components";
import { Section } from "/src/components/styled";
import farmerImage from "/src/assets/farmer.svg";

export const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  position: relative;
  background-color: ${(props) => props.theme.colorBlue};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};

  &::before {
    position: absolute;
    content: "";
    top: 76px;
    right: 90px;
    display: block;
    width: 446px;
    height: 447px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colorDarkBlue};
  }

  &::after {
    position: absolute;
    content: "";
    top: 38px;
    right: 175px;
    width: 273px;
    height: 607px;
    background-image: url(${farmerImage});
    background-repeat: no-repeat;
  }
`;

export const TextWrapper = styled.div`
  width: 637px;
  padding-top: 183px;
  padding-bottom: 183px;
  position: relative;
  z-index: 3;
`;

export const Text = styled(Paragraph)`
  width: 538px;
  font-size: ${(props) => props.theme.fontSizeDefauilt};
  line-height: 27px;
  color: ${(props) => props.theme.colorBlackForText};
  margin-top: 24px;
`;
