import React from "react";
import "./Overlay.scss";

const Overlay = ({ open }) => {
  let classes = "overlay";

  if (open) {
    classes += " overlay--open";
  }

  return <div className={classes} />;
};

export default Overlay;
