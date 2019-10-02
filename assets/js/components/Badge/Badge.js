import React from "react";
import "../../Core/Fonts";

const Badge = props => {
  const { text, className, options, children } = props;

  let styles = {
    backgroundColor: options.backgroundColor,
    marginRight: options.marginRight,
    color: options.color ?? "#ffffff"
  };

  return (
    <div className={className} style={styles}>
      {children ?? text}
    </div>
  );
};

export default Badge;
