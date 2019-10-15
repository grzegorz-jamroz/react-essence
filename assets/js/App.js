import React from "react";
import { render } from "react-dom";
import Root from "./containers/Root";
import { CartOpenState } from "./states/cartOpen.state";
import { MenuOpenState } from "./states/menuOpen.state";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Root>
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
    </Root>
  );
};

render(<App />, document.getElementById("root"));
