import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, Text, TextWrapper } from "./styles.js";

function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={TitleSize.BIG} level={1}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
