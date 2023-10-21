import React, { useState } from "react";
import {
  Form,
  Fieldset,
  CheckboxLabel,
  Label,
  Input,
  Price,
  PriceWrapper,
  ProductSwiper,
  Wrapper
} from "./styled";
import Button from "/src/components/ui/button/button";
import Title, { TitleSize } from "/src/components/ui/title/title";
import CheckboxList from "/src/components/ui/checkBoxList/checkBoxList";
import CardProduct from "/src/components/ui/products/CardProduct";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

// Оформление заказа
function Order({
  products // список продуктов
}) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  //id в продукты
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  //цена покупки
  const price = selectProducts.reduce((sum, product) => sum + product.price, 0);
  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.alt} - ${product.price} руб.\n`
    )}
    Итого: ${price} руб.
    Доставка по адресу: ${address}.`);
  };

  return products && products.length ? (
    <Form as="form">
      <Wrapper>
        <Fieldset>
          <Title level={2} size={TitleSize.LITTLE}>
            Выберете продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.alt
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </Fieldset>
        <Fieldset>
          <Title level={2} size={TitleSize.LITTLE}>
            Сделать заказ
          </Title>
          <Label>
            <Input
              type="text"
              placeholder="Введите адрес достаки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Label>
          <PriceWrapper>
            Цена <Price>{price} руб.</Price>
          </PriceWrapper>
          <Button
            maxWidth
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Купить
          </Button>
        </Fieldset>
      </Wrapper>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProduct product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </Form>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default Order;
