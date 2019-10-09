import React from "react";
import "../../Core/Styles";
import "./Navbar.scss";
import MenuToggler from "../MenuToggler";
import Logo from "../Logo";
import CartToggler from "../CartToggler";

const Navbar = props => {
  const { menuOpen, setMenuOpen, cartOpen, setCartOpen } = props;

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__row">
            <div className="navbar__leftSite">
              <Logo />
            </div>
            <div className="navbar__rightSite">
              <CartToggler open={cartOpen} setOpen={setCartOpen} />
              <MenuToggler open={menuOpen} setOpen={setMenuOpen} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
