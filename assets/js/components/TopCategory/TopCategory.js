import React from 'react';
import "../../Core/Styles";
import './TopCategory.scss';

const TopCategory = props => {
  const { category } = props;

  try {
    category.thumbnail = require("../../../img/category/" + category.thumbnail);
  } catch (e) {
  }

  return (
    <div className="topCategory col-12 col-md-4">
      <a className="topCategory__a"
         style={ { backgroundImage: `url(${category.thumbnail})` } }
         href="#">{category.name}</a>
    </div>
  );
};

export default TopCategory;
