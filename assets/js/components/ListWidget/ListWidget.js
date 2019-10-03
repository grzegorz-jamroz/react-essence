import React from 'react';
import './ListWidget.scss';

const ListWidget = () => {
  return (
    <div className="listWidget">
      <h6 className="listWidget__title">Catagories</h6>
      <div>
        <ul className="listWidget__categories">
          <li>
            <span className="listWidget__categoryName">clothing</span>
            <ul className="subListWidget">
              <li><a className="subListWidget__link" href="#">All</a></li>
              <li><a className="subListWidget__link" href="#">Bodysuits</a></li>
              <li><a className="subListWidget__link" href="#">Dresses</a></li>
              <li><a className="subListWidget__link" href="#">Hoodies &amp; Sweats</a></li>
              <li><a className="subListWidget__link" href="#">Jackets &amp; Coats</a></li>
              <li><a className="subListWidget__link" href="#">Jeans</a></li>
              <li><a className="subListWidget__link" href="#">Pants &amp; Leggings</a></li>
              <li><a className="subListWidget__link" href="#">Rompers &amp; Jumpsuits</a></li>
              <li><a className="subListWidget__link" href="#">Shirts &amp; Blouses</a></li>
              <li><a className="subListWidget__link" href="#">Shirts</a></li>
              <li><a className="subListWidget__link" href="#">Sweaters &amp; Knits</a></li>
            </ul>
          </li>
          <li data-toggle="collapse" data-target="#shoes" className="collapsed">
            <a href="#">shoes</a>
            <ul className="sub-menu collapse" id="shoes">

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
  );
};

export default ListWidget;
