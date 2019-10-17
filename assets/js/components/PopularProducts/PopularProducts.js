import React from "react";
import ProductsSlider from "../ProductsSlider";
import "../../Core/Styles";
import "./PopularProducts.scss";

const PopularProducts = () => {
  return (
    <section className="popularProducts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="popularProducts__heading">
              <h2 className="popularProducts__h2">Popular Products</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ProductsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
