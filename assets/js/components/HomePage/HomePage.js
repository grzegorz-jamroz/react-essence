import React from 'react';
import './HomePage.scss';
import Banner from "../Banner";
import TopCategories from "../TopCategories";
import CallToAction from "../CallToAction";
import ProductsSlider from "../ProductsSlider";

const HomePage = ({ cart }) => {
  return (
    <React.Fragment>
      <Banner/>
      <TopCategories/>
      <CallToAction/>
      <ProductsSlider cart={cart}/>
    </React.Fragment>
  );
};

export default HomePage;
