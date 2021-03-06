import React from "react";
import "../../Core/Styles";
import "./Navbar.scss";
import MenuToggler from "../MenuToggler";
import Logo from "../Logo";
import CartToggler from "../CartToggler";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__row">
            <div className="navbar__leftSite">
              <Logo />
            </div>
            <div className="navbar__rightSite">
              <CartToggler />
              <MenuToggler />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
