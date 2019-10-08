import React from 'react';
import ShopCategories from "../ShopCategories";
import ShopColors from "../ShopColors";
import ShopBrands from "../ShopBrands";

const ShopSidebar = () => {
  return (
    <div className="shopSidebar">
      <ShopCategories />

      <div className="widget price mb-50">
        <h6 className="widget-title mb-30">Filter by</h6>
        <p className="widget-title2 mb-30">Price</p>

        <div className="widget-desc">
          <div className="slider-range">
            <div
              data-min="49"
              data-max="360"
              data-unit="$"
              className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
              data-value-min="49"
              data-value-max="360"
              data-label-result="Range:"
            >
              <div className="ui-slider-range ui-widget-header ui-corner-all" />
              <span
                className="ui-slider-handle ui-state-default ui-corner-all"
                tabIndex="0"
                style={{left: "0%"}}
              />
              <span
                className="ui-slider-handle ui-state-default ui-corner-all"
                tabIndex="0"
                style={{left: "100%"}}
              />
              <div
                className="ui-slider-range ui-corner-all ui-widget-header"
                style={{left: "0%", width: "100%"}}
              />
            </div>
            <div className="range-price">Range: $49.00 - $360.00</div>
          </div>
        </div>
      </div>

      <ShopColors />

      <ShopBrands />
    </div>
  );
};

export default ShopSidebar;
