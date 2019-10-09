import React from "react";
import "./ShopSubCategory.scss";

const ShopSubCategory = ({ category }) => {
  return (
    <li key={category.id}>
      <a className="shopSubCategory__link" href="#">
        {category.name}
      </a>
    </li>
  );
};

export default ShopSubCategory;
