import React from "react";
import Panel from "/src/components/ui/panel/panel";
import Title,{ TitleSize } from "/src/components/ui/title/title";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styled";
import Tabs from "/src/components/ui/tabs/tabs";
import OptionsList from "/src/components/ui/optionsList/optionsList";

function CardProduct({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];
  return (
    <Panel>
      <ProductImage src={product.src} />
      <ContentWrapper>
        <Title level={3}>
          {product.alt}
        </Title>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default CardProduct;
