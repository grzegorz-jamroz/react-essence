import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import { CART } from './mocks/lib/index'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItemsAmount, setCartItemsAmount] = useState(CART.quantity);

  const addCartItemsAmount = quantity => {
    setCartItemsAmount(cartItemsAmount + quantity);
  };

  const subtractCartItemsAmount = quantity => {
    setCartItemsAmount(cartItemsAmount - quantity);
  };

  return (
    <React.Fragment>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItemsAmount={cartItemsAmount}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Cart
        cartOpen={cartOpen}
        cartItemsAmount={cartItemsAmount}
        setCartOpen={setCartOpen}
        addCartItemsAmount={addCartItemsAmount}
        subtractCartItemsAmount={subtractCartItemsAmount}
      />
      <Router>
        <HomePage path="/" />
        <Shop path="/shop" />
      </Router>;
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
