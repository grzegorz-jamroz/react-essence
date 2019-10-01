import React from 'react';
import "../../Core/Styles";
import './ProductsSlider.scss'
import { PRODUCTS } from '../../mocks/lib/index'
import ProductSlide from "../ProductSlide";

const ProductsSlider = () => {
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
            <div className="popular-products-slides owl-carousel">
              {PRODUCTS.map(product => (
                <ProductSlide />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;
