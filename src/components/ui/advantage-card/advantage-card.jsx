import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import {
  Feature,
  CardTitleWrapper,
  CardIcon,
  FeatureOwner,
  CardText
} from "./styles";

function AdvantageCard({ title, owner, about, isNegative, image }) {
  return (
    <Feature isNegative={isNegative}>
      <CardIcon alt={title} src={image} />
      <CardTitleWrapper>
        <FeatureOwner isNegative={isNegative}>{owner}</FeatureOwner>
        <Title size={TitleSize.LITTLE} level={3}>
          {title}
        </Title>
      </CardTitleWrapper>
      <CardText dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
}
export default AdvantageCard;
