import React from "react";
import Breadcrumb from "../Breadcrumb";
import {Pagination} from "../Pagination/Pagination";
import {ShopProducts} from "../ShopProducts/ShopProducts";
import {ShopWidgets} from "../ShopWidgets/ShopWidgets";

const Shop = () => {
  return (
    <React.Fragment>
      <Breadcrumb text="Welcome in shop!" />

      <section className="shop_grid_area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <ShopWidgets />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <ShopProducts />
              <Pagination />
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  );
};

export default Shop;
