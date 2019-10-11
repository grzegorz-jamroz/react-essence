import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import { CartProvider } from "./context/CartContext";
import { MenuOpenState } from "./states/menuOpen.state";
import { CartOpenState } from "./states/cartOpen.state";

const App = () => {
  return (
    <>
      <CartOpenState>
        <MenuOpenState>
          <Navbar/>
          <Menu/>
          {/*<Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />*/}
          {/*<Router>*/}
          {/*  <HomePage path="/" />*/}
          {/*  <Shop path="/shop" />*/}
          {/*</Router>*/}
        </MenuOpenState>
      </CartOpenState>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
