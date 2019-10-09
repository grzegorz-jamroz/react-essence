import React, { useContext } from "react";
import "../../Core/Styles";
import "./Navbar.scss";
import MenuToggler from "../MenuToggler";
import Logo from "../Logo";
import CartToggler from "../CartToggler";
import { CartContext } from "../../context/CartContext";

const Navbar = props => {
  const {
    menuOpen,
    setMenuOpen,
    cartOpen,
    setCartOpen
  } = props;

  const cart = useContext(CartContext);
console.log(cart.cartItemsAmount);
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__row">
            <div className="navbar__leftSite">
              <Logo />
            </div>
            <div className="navbar__rightSite">

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
