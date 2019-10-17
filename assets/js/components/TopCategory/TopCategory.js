import React from "react";
import "../../Core/Styles";
import "./TopCategory.scss";

const TopCategory = ({ category: { name, thumbnail } }) => {
  try {
    thumbnail = require("../../../img/category/" + thumbnail);
  } catch (e) {
    /* leave empty */
  }

  return (
    <div className="topCategory col-12 col-md-4">
      <a
        className="topCategory__a"
        style={{ backgroundImage: `url(${thumbnail})` }}
        href="/"
      >
        {name}
      </a>
    </div>
  );
};

export default TopCategory;
