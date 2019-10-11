import React from "react";
import "./Overlay.scss";
import { useMenuOpenState } from "../../states/menuOpen.state";

const Overlay = () => {
  const [open] = useMenuOpenState();
  let classes = "overlay";

  if (open) {
    classes += " overlay--open";
  }

  return <div className={classes} />;
};

export default Overlay;
