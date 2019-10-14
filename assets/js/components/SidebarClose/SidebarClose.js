import React from "react";
import "../NavbarButton/NavbarButton.scss";
import "../MenuToggler/MenuToggler.scss";

const SidebarClose = ({handleClick}) => {
  return (
    <div onClick={handleClick} className="navbarButton">
      <span className="navbarButton__menuToggler navbarButton__menuToggler--open">
        <span />
        <span />
        <span />
      </span>
    </div>
  );
};

export default SidebarClose;
