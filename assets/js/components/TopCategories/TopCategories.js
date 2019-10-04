import React from 'react';
import "../../Core/Styles";
import './TopCategories.scss';
import TopCategory from "../TopCategory";
import { CATEGORIES } from '../../mocks/lib/index'

const TopCategories = () => {
  return (
    <div className="topCategories">
      <div className="container">
        <div className="topCategories__row row">
          {CATEGORIES.map(category => {
            if (category.parentId === "") {
              return (
                <TopCategory key={category.id} name={category.name} imgUrl={category.thumbnail} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
