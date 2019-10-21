import React from "react";
import "../../Core/Styles";
import "./Banner.scss";

const Banner = () => (
  <section className="banner">
    <div className="container h-100">
      <div className="banner__row row h-100">
        <div className="col-12">
          <div className="banner__content">
            <h6 className="banner__h6">asoss</h6>
            <h2 className="banner__h2">New Collection</h2>
            <a href="/" className="btn essence-btn">
              view collection
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
