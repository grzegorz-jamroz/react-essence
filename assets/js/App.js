import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import Decimal from "decimal.js";
import { firestore } from "./Firebase";
import { collectIdsAndDocs } from "./Firebase/utilities";
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
    setCartItemsAmount
  );

  const requestCart = async () => {
    const snapshot = await firestore.collection('carts').limit(1).get();
    let cart = snapshot.docs.map(collectIdsAndDocs);
    if (typeof cart[0] !== "undefined") {
      cart = cart[0];
      setTotal(new Decimal(cart.total));
      setSubtotal(new Decimal(cart.subtotal));
      setDelivery(new Decimal(cart.delivery));
      setDiscount(new Decimal(cart.discount));
      setCartItems(cart.items);
      setCartItemsAmount(cart.quantity);
    }
  };

  useEffect(() => {
    requestCart();
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
        cartItemsAmount={cartItemsAmount}
        total={total}
        delivery={delivery}
        discount={discount}
        subtotal={subtotal}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setDelivery={setDelivery}
        setTotal={setTotal}
        setSubtotal={setSubtotal}
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
