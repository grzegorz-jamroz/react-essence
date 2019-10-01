import React from 'react';
import './HomePage.scss';
import Banner from "../Banner";
import TopCategories from "../TopCategories";
import CallToAction from "../CallToAction";

const HomePage = () => (
  <React.Fragment>
    <Banner />
    <TopCategories />
    <CallToAction />
  </React.Fragment>
);

export default HomePage;
