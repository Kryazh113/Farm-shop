import React from "react";
import CardProduct from "/src/components/ui/cardProduct/cardProduct";

function Cards({ buyCards }) {
  console.log(buyCards);
  return <CardProduct buyCards={buyCards} />;
}

export default Cards;
