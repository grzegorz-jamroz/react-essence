import React from "react";
import "../../Core/Essence";
import "../NavbarButton/NavbarButton.scss";
import "../NavbarButton/MenuToggler.scss";
import { useMenuOpenState, toggle } from "../../states/menuOpen.state";

const MenuToggler = () => {
  const [open, dispatch] = useMenuOpenState();
  const openClass = open ? "navbarButton__menuToggler--open" : "";

  return (
    <button
      onClick={() => dispatch(toggle())}
      className="navbarButton navbarButton--bRight btn"
    >
      <span className={`navbarButton__menuToggler ${openClass}`}>
        <span />
        <span />
        <span />
      </span>
    </button>
  );
};

export default MenuToggler;
