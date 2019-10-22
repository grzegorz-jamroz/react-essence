import React from "react";
import "./ShopTopBar.scss";
import FilterDropdown from "../FilterDropdown";

const ShopTopBar = ({foundNumber = 0}) => {
  return (
    <div className="shopTopBar">
      <div className="shopTopBar__found">
        <span className="shopTopBar__foundNumber">{foundNumber}</span> products found
      </div>
      <FilterDropdown />
    </div>
  );
};

export default ShopTopBar;
