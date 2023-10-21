import styled, { css } from "styled-components";
import { Section } from "/src/components/styled";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/ok.svg";

export const Form = styled(Section)`
  position: absolute;
  top: 80px;
  bottom: 80px;
  display: flex;
  padding: 40px 90px;
  padding-bottom: 0;
  background-color: #f7f7f7};
  width: 1280px;
`;

export const Wrapper = styled.div`
  display: block;
  margin-right: 20px;
  overflow-y: overlay;
  max-height: 100%;
`;

export const Fieldset = styled.fieldset`
  background: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 24px;
  width: 353px;
  box-sizing: border-box;

  &:first-child {
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  display: block;
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
`;

export const Input = styled.input`
  width: 313px;
  height: 48px;
  padding-left: 12px;
  font-size: 14px;
  color: #333333;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #f6f6f6;
  margin-top: 24px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const Price = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  color: #333333;
`;

export const PriceWrapper = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.colorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const CardUl = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const FilterWrapper = styled.div`
  display: block;
`;
