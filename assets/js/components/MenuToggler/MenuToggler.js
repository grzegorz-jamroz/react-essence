import React from "react";
import "../NavbarButton/NavbarButton.scss";
import "./MenuToggler.scss";

const MenuToggler = props => {
  const { open, setOpen, bRight = true } = props;
  let classes = "navbarButton__menuToggler";
  let btnClass = "";

  if (open) {
    classes += " navbarButton__menuToggler--open";
  }

  if (bRight) {
    btnClass = " navbarButton--bRight";
  }

  return (
    <div onClick={() => setOpen(!open)} className={`navbarButton${btnClass}`}>
      <span className={classes}>
        <span />
        <span />
        <span />
      </span>
    </div>
  );
};

export default MenuToggler;
