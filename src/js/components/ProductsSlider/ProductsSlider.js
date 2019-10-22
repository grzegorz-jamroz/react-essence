import React, { useState, useEffect } from "react";
import useProductsRequest from "../../hooks/useProductsRequest";
import ProductSlide from "../ProductSlide";
import Glide from "@glidejs/glide";
import "../../Core/Glide";
import { addCartItem } from "../../actions/cartActions";
import { connect } from "react-redux";

const ProductsSlider = ({addCartItem}) => {
  const [slider] = useState(
    new Glide(".jsProductsSlider", {
      type: "carousel",
      startAt: 0,
      perView: 4,
      autoplay: 6000,
      gap: 30,
      animationDuration: 1000
    })
  );

  const clickHandler = (e) => {
    if (status !== "SUCCESS") {
      return;
    }

    let product = products.filter(product => product.id === e.target.dataset.product_id);

    if (e.target.matches('.singleProduct__addToCartBtn')) {
      product = product[0];
      const item = {
        product: product,
        quantity: 1,
        amountValue: product.unitPrice
      };
      addCartItem(item);
    }
  };

  const [
    { status, response: products },
    requestProducts
  ] = useProductsRequest();

  useEffect(() => {
    requestProducts().then(() => {
      slider.mount();
    });

    return () => slider.destroy();
  }, []);

  if (status === "SUCCESS") {
    slider.on(['mount.after'], () => {
      const elements = document.querySelector('.glide__slides');
      elements.addEventListener('click', clickHandler);
    });
  }

  return (
    <>
      {status === "FETCHING" && <div>Fetching...</div>}
      {status === "SUCCESS" && (
        <div className="jsProductsSlider">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {products.map(product => (
                <ProductSlide key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductsSlider);
