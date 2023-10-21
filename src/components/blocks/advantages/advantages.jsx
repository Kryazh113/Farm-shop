import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import Button from "/src/components/ui/button/button";
import { AdvantagesList, AdvantageList, AdvantegeItem } from "./styles";

function Advantages({ cards }) {
  return cards?.length ? (
    <AdvantagesList>
      <Title level={2} size={TitleSize.SMALL}>
        Почему фермерские продукты лучше?
      </Title>
      <AdvantageList>
        {cards.map((card) => (
          <AdvantegeItem key={card.id}>
            <AdvantageCard {...card} />
          </AdvantegeItem>
        ))}
      </AdvantageList>
      <Button minWidth={260} link="/buy">
        Купить
      </Button>
    </AdvantagesList>
  ) : null;
}

export default Advantages;
