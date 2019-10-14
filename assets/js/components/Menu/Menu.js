import React from "react";
import { Link } from "@reach/router";
import "../../Core/Fonts";
import "./Menu.scss";
import Sidebar from "../Sidebar";
import { useMenuOpenState, close } from "../../states/menuOpen.state";

const Menu = () => {
  const [open, dispatch] = useMenuOpenState();
  const menuClose = () => dispatch(close());

  return (
    <Sidebar open={open} handleClose={menuClose}>
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to={`/shop`}>products</Link>
          </li>
          <li className="menu__item">terms of use</li>
          <li className="menu__item">contact</li>
        </ul>
      </div>
    </Sidebar>
  );
};

export default Menu;
