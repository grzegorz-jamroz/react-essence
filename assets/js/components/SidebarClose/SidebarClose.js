import React from "react";
import "../../Core/Essence";
import "../NavbarButton/NavbarButton.scss";
import "../NavbarButton/MenuToggler.scss";

const SidebarClose = ({handleClick}) => {
  return (
    <button onClick={handleClick} className="navbarButton btn">
      <span className="navbarButton__menuToggler navbarButton__menuToggler--open">
        <span />
        <span />
        <span />
      </span>
    </button>
  );
};

export default SidebarClose;
