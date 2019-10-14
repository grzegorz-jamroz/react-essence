import React from "react";
import "../NavbarButton/NavbarButton.scss";
import "../NavbarButton/MenuToggler.scss";
import { useMenuOpenState, toggle } from "../../states/menuOpen.state";

const MenuToggler = () => {
  const [open, dispatch] = useMenuOpenState();
  const openClass = open ? "navbarButton__menuToggler--open" : "";

  return (
    <div onClick={() => dispatch(toggle())} className={`navbarButton navbarButton--bRight`}>
      <span className={`navbarButton__menuToggler ${openClass}`}>
        <span />
        <span />
        <span />
      </span>
    </div>
  );
};

export default MenuToggler;
