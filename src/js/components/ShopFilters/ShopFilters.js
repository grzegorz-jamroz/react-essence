import React from "react";
import ColorFilter from "../ColorFilter";
import PriceFilter from "../PriceFilter";
import "./ShopFilters.scss";
import ShopBrands from "../ShopBrands";

const ShopFilters = () => {
  return (
    <div className="shopFilters">
      <h6 className="shopFilters__title">Filter by</h6>
      <PriceFilter />
      <ColorFilter />
      <ShopBrands />
    </div>
  );
};

export default ShopFilters;
