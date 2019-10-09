import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import { CartProvider, CartContext } from './context/CartContext'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
    </CartProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
