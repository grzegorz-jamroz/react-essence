import React from 'react';
import "../../Core/Styles";
import './TopCategory.scss';

const TopCategory = props => {
  const {name, imgUrl} = props;

  return (
    <div className="topCategory col-12 col-sm-6 col-md-4">
      <a className="topCategory__a"
         style={ { backgroundImage: `url(${require("../../../img/category/" + imgUrl)})` } }
         href="#">{name}</a>
    </div>
  );
};

export default TopCategory;
