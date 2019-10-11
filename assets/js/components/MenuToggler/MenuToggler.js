import React from "react";
import "../NavbarButton/NavbarButton.scss";
import "./MenuToggler.scss";
import { useMenuOpenState, toggle } from "../../states/menuOpen.state";

const MenuToggler = props => {
  const { bRight = true } = props;
  const [open, dispatch] = useMenuOpenState();

  let classes = "navbarButton__menuToggler";
  let btnClass = "";

  if (open) {
    classes += " navbarButton__menuToggler--open";
  }

  if (bRight) {
    btnClass = " navbarButton--bRight";
  }

  return (
    <div onClick={() => dispatch(toggle())} className={`navbarButton${btnClass}`}>
      <span className={classes}>
        <span />
        <span />
        <span />
      </span>
    </div>
  );
};

export default MenuToggler;
