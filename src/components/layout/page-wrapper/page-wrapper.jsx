import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
// import MainPage from "/src/components/pages/main-page/main-page";
// import Order from "/src/components/pages/BuyPage/buy-page";
import { PageWrapperMain } from "./styles";
import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <PageWrapperMain>
        <Outlet />
        {/* <Order products={products} /> */}
        {/* <MainPage {...prop} /> */}
      </PageWrapperMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
