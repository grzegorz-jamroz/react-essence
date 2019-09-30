import React from "react";
import "../../Core/Fonts";
import "./Menu.scss";
import Sidebar from "../Sidebar";

const Menu = props => {
  const { menuOpen, setMenuOpen } = props;

  return (
    <Sidebar open={menuOpen} setOpen={setMenuOpen}>
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__item">products</li>
          <li className="menu__item">terms of use</li>
          <li className="menu__item">contact</li>
        </ul>
      </div>
    </Sidebar>
  );
};

export default Menu;
