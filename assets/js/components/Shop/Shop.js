import React from "react";
import Breadcrumb from "../Breadcrumb";
import ShopContent from "../ShopContent";

const Shop = () => {
  return (
    <React.Fragment>
      <Breadcrumb text="Welcome in shop!" />
      <ShopContent />
    </React.Fragment>
  );
};

export default Shop;
