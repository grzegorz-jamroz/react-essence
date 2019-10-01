import React, { useState, useEffect } from 'react';
import "../../Core/Styles";
import './ProductsSlider.scss'
import { PRODUCTS } from '../../mocks/lib/index'
import ProductSlide from "../ProductSlide";
import Glide from '@glidejs/glide'
import '../../Core/Glide';

const ProductsSlider = () => {
  const [slider] = useState(new Glide('.jsProductsSlider', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    autoplay: 7000,
    gap: 30,
    animationDuration: 1000,
  }));

  useEffect(() => {
    slider.mount();

    return () => slider.destroy();
  }, []);

  return (
    <section className="productsSlider new_arrivals_area section-padding-80 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="productsSlider__heading">
              <h2>Popular Products</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jsProductsSlider">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {PRODUCTS.map(product => (
                    <ProductSlide key={product.id} product={product} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
