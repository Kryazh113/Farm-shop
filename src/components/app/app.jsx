import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import cardsList from "/src/mocks/cards-list";
import products from "/src/mocks/products";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import Order from "/src/components/pages/BuyPage/buy-page";
import MainPage from "/src/components/pages/main-page/main-page";
import ScrooToTop from "/src/components/ui/scrollTop/scrollTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrooToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage cards={cardsList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
