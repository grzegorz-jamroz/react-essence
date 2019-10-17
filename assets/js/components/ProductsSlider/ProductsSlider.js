import React, { useState, useEffect } from "react";
import useProductsRequest from "../../hooks/useProductsRequest";
import ProductSlide from "../ProductSlide";
import Glide from "@glidejs/glide";
import "../../Core/Glide";

const ProductsSlider = () => {
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
      )}</>
  );
};

export default ProductsSlider;
