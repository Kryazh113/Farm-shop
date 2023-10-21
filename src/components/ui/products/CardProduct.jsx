import React from "react";
import Panel from "/src/components/ui/panel/panel";
import { TitleSize } from "/src/components/ui/title/title";
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
        <ProductTitle as="h3" size={TitleSize.BIG}>
          {product.alt}
        </ProductTitle>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default CardProduct;
