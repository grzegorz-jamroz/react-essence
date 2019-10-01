import React from 'react';
import "../../Core/Styles";
import './TopCategories.scss';
import TopCategory from "../TopCategory";
import { TOP_CATEGORIES } from '../../mocks/lib/index'

const TopCategories = () => {
  return (
    <div className="topCategories">
      <div className="container">
        <div className="topCategories__row row">
          {TOP_CATEGORIES.map(category => (
            <TopCategory key={category.id} name={category.name} imgUrl={category.thumbnail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
