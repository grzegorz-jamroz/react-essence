import React from 'react';
import './ShopTopBar.scss';
import FilterDropdown from "../FilterDropdown";

const ShopTopBar = () => {
  return (
    <div className="shopTopBar">
      <div className="shopTopBar__found">
        <span className="shopTopBar__foundNumber">186</span> products found
      </div>
      <FilterDropdown />
    </div>
  );
};

export default ShopTopBar;
