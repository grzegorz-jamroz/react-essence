import React from 'react';
import './ShopMainCategory.scss';
import ShopSubCategory from "../ShopSubCategory";

const ShopMainCategory = ({ category, categories }) => {
  return (
    <li>
      <span className="shopMainCategory__name">{category.name}</span>
      <ul className="shopMainCategory__ul">
        {categories.map(subCategory => {
          if (subCategory.parentId === category.id) {
            return (<ShopSubCategory key={subCategory.id} category={subCategory} />);
          }
        })}
      </ul>
    </li>
  );
};

export default ShopMainCategory;
