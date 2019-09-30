import React from "react";
import "../../Core/Fonts";
import "./Badge.scss";

const Badge = props => {
  const { text, marginRight, color, bgColor, children } = props;

  let styles = {
    backgroundColor: bgColor,
    marginRight: marginRight,
    color: color ?? "#ffffff"
  };

  return (
    <div className="cartItemBadge" style={styles}>
      {children ?? text}
    </div>
  );
};

export default Badge;
