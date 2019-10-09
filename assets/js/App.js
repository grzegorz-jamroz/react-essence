import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import Decimal from "decimal.js";
import CartManager from "./utilities/CartManager";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(new Decimal(0));
  const [discount, setDiscount] = useState(new Decimal(0));
  const [delivery, setDelivery] = useState(new Decimal(0));
  const [total, setTotal] = useState(new Decimal(0));

  const cart = new CartManager(
    cartItems,
    setCartItems,
    cartItemsAmount,
    setCartItemsAmount,
    total,
    setTotal,
    subtotal,
    setSubtotal,
    discount,
    setDiscount,
    delivery,
    setDelivery
  );

  useEffect(() => {
    cart.requestCart();
  }, []);

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
        setCartOpen={setCartOpen}
        cart={cart}
      />
      <Router>
        <HomePage path="/" cart={cart} />
        <Shop path="/shop" />
      </Router>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
