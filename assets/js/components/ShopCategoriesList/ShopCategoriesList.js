import React from 'react';
import ShopMainCategory from "../ShopMainCategory";

const ShopCategoriesList = ({ categories }) => {
  return (
    <ul>
      {categories.map(category => {
        if (category.parentId === "") {
          return (<ShopMainCategory key={category.id} categories={categories} category={category} />);
        }
      })}
    </ul>
  )
};

export default ShopCategoriesList;
