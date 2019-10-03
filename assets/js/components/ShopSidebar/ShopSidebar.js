import React from 'react';
import ListWidget from "../ListWidget";

const ShopSidebar = () => {
  return (
    <div className="shopSidebar">
      <ListWidget />

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

      <div className="widget color mb-50">
        <p className="widget-title2 mb-30">Color</p>
        <div className="widget-desc">
          <ul className="d-flex">
            <li><a href="#" className="color1" /></li>
            <li><a href="#" className="color2" /></li>
            <li><a href="#" className="color3" /></li>
            <li><a href="#" className="color4" /></li>
            <li><a href="#" className="color5" /></li>
            <li><a href="#" className="color6" /></li>
            <li><a href="#" className="color7" /></li>
            <li><a href="#" className="color8" /></li>
            <li><a href="#" className="color9" /></li>
            <li><a href="#" className="color10" /></li>
          </ul>
        </div>
      </div>

      <div className="widget brands mb-50">
        <p className="widget-title2 mb-30">Brands</p>
        <div className="widget-desc">
          <ul>
            <li><a href="#">Asos</a></li>
            <li><a href="#">Mango</a></li>
            <li><a href="#">River Island</a></li>
            <li><a href="#">Topshop</a></li>
            <li><a href="#">Zara</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
