import React from "react";
import ColorFilter from "../ColorFilter";
import PriceFilter from "../PriceFilter";
import "./ShopFilters.scss";
import BrandFilter from "../BrandFilter";

const ShopFilters = () => {
  return (
    <div className="shopFilters">
      <h6 className="shopFilters__title">Filter by</h6>
      <PriceFilter />
      <ColorFilter />
      <BrandFilter />
    </div>
  );
};

export default ShopFilters;
