import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import { CartProvider } from "./context/CartContext";

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
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <Router>
        <HomePage path="/" />
        <Shop path="/shop" />
      </Router>
    </CartProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
