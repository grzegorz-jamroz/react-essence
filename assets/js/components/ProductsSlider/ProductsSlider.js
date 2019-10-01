import React, { useState, useEffect } from 'react';
import "../../Core/Styles";
import './ProductsSlider.scss'
import { PRODUCTS } from '../../mocks/lib/index'
import ProductSlide from "../ProductSlide";
import Glide from '@glidejs/glide'
import '../../Core/Glide';

const ProductsSlider = () => {
  const [slider] = useState(new Glide('.glide'));

  useEffect(() => {
    slider.mount();

    return () => slider.destroy();
  }, []);

  return (
    <section className="new_arrivals_area section-padding-80 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>Popular Products</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="glide">
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
