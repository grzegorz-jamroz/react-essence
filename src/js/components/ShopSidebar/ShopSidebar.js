import React from "react";
import ShopCategories from "../ShopCategories";
import ShopFilters from "../ShopFilters";

const ShopSidebar = () => {
  return (
    <div className="shopSidebar">
      <ShopCategories />
      <ShopFilters />
    </div>
  );
};

export default ShopSidebar;
