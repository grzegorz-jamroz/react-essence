import React from 'react';

export const ShopWidgets = () => {
  return (
    <div className="shopWidgets">

      <div className="shopWidget catagory mb-50">
        <h6 className="shopWidget__title mb-30">Catagories</h6>

        <div className="shopWidget__catagories-menu">
          <ul id="menu-content2" className="menu-content collapse show">
            <li data-toggle="collapse" data-target="#clothing">
              <a href="#">clothing</a>
              <ul className="sub-menu collapse show" id="clothing">
                <li><a href="#">All</a></li>
                <li><a href="#">Bodysuits</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Hoodies &amp; Sweats</a></li>
                <li><a href="#">Jackets &amp; Coats</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Pants &amp; Leggings</a></li>
                <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                <li><a href="#">Shirts &amp; Blouses</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Sweaters &amp; Knits</a></li>
              </ul>
            </li>
            <li data-toggle="collapse" data-target="#shoes" className="collapsed">
              <a href="#">shoes</a>
              <ul className="sub-menu collapse" id="shoes">
                <li><a href="#">All</a></li>
                <li><a href="#">Bodysuits</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Hoodies &amp; Sweats</a></li>
                <li><a href="#">Jackets &amp; Coats</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Pants &amp; Leggings</a></li>
                <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                <li><a href="#">Shirts &amp; Blouses</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Sweaters &amp; Knits</a></li>
              </ul>
            </li>
            <li data-toggle="collapse" data-target="#accessories" className="collapsed">
              <a href="#">accessories</a>
              <ul className="sub-menu collapse" id="accessories">
                <li><a href="#">All</a></li>
                <li><a href="#">Bodysuits</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Hoodies &amp; Sweats</a></li>
                <li><a href="#">Jackets &amp; Coats</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Pants &amp; Leggings</a></li>
                <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                <li><a href="#">Shirts &amp; Blouses</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Sweaters &amp; Knits</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

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
                style="left: 0%;"
              />
              <span
                className="ui-slider-handle ui-state-default ui-corner-all"
                tabIndex="0"
                style="left: 100%;"
              />
              <div
                className="ui-slider-range ui-corner-all ui-widget-header"
                style="left: 0%; width: 100%;"
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
