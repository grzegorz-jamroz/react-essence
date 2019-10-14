import React, { useEffect } from "react";
import binImg from "../../../img/core-img/bag.svg";
import "../../Core/Fonts";
import "./CartToggler.scss";
import "../NavbarButton/NavbarButton.scss";
import { useCartOpenState, toggle } from "../../states/cartOpen.state";
import useCartRequest from "../../hooks/useCartRequest";

const CartToggler = () => {
  const [, dispatch] = useCartOpenState();
  const [{ status, response: cart }, requestCart] = useCartRequest();

  useEffect(() => {
    requestCart();
  }, []);

  return (
    <div onClick={() => dispatch(toggle())} className="navbarButton navbarButton--bRight">
      <div className="navbarButton__cartToggler">
        <img className="cartToggler__icon" src={binImg} alt="bin-icon" />
        {console.log(cart)}
        {status === "SUCCESS" && (
          <span className="cartToggler__counter">{cart.cartItemsAmount}</span>
        )}
      </div>
    </div>
  );
};

export default CartToggler;
