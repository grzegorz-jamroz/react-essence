import React from "react";
import Pagination from "../Pagination";
import ShopProducts from "../ShopProducts";
import ShopSidebar from "../ShopSidebar";
import './ShopContent.scss';

const ShopContent = () => {
  return (
    <section className="shopContent">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <ShopSidebar />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <ShopProducts />
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopContent;
