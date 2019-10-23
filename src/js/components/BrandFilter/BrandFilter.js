import React from "react";
import "./BrandFilter.scss";

const BrandFilter = () => {
  return (
    <div className="brandFilter">
      <p className="brandFilter__title">Brands</p>
      <div className="brandFilter__content">
        <ul className="brandFilter__ul">
          <li>
            <a href="/" className="shopBrand__link">
              Asos
            </a>
          </li>
          <li>
            <a href="/" className="shopBrand__link">
              Mango
            </a>
          </li>
          <li>
            <a href="/" className="shopBrand__link">
              River Island
            </a>
          </li>
          <li>
            <a href="/" className="shopBrand__link">
              Topshop
            </a>
          </li>
          <li>
            <a href="/" className="shopBrand__link">
              Zara
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrandFilter;
