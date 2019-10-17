import React from "react";
import "./ShopBrands.scss";

const ShopBrands = () => {
  return (
    <div className="shopBrands">
      <p className="shopBrands__title">Brands</p>
      <div className="shopBrands__content">
        <ul className="shopBrands__ul">
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

export default ShopBrands;
