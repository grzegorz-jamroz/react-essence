import React from "react";
import "./HomePage.scss";
import Banner from "../Banner";
import TopCategories from "../TopCategories";
import CallToAction from "../CallToAction";
import PopularProducts from "../PopularProducts";

const HomePage = () => {
  return (
    <>
      <Banner />
      <TopCategories />
      <CallToAction />
      <PopularProducts />
    </>
  );
};

export default HomePage;
