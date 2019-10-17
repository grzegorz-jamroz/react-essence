import React from "react";
import "./HomePage.scss";
import Banner from "../Banner";
import TopCategories from "../TopCategories";
import CallToAction from "../CallToAction";
import PopularProducts from "../PopularProducts";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <TopCategories />
      <CallToAction />
      <PopularProducts />
    </React.Fragment>
  );
};

export default HomePage;
