import React, { useEffect } from "react";
import Cart from "../components/CartTest/Cart";
import { CartOpenState } from "../states/cartOpen.state";
import { MenuOpenState } from "../states/menuOpen.state";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

const AsyncApp = props => {
  return (
    <CartOpenState>
      <MenuOpenState>
        <Navbar/>
        <Menu/>
        <Cart/>
        {/*<Router>*/}
        {/*  <HomePage path="/" />*/}
        {/*  <Shop path="/shop" />*/}
        {/*</Router>*/}
      </MenuOpenState>
    </CartOpenState>
  );
};

export default AsyncApp;
