import React from 'react';
import './ShopColors.scss';

const ShopColors = () => {
  return (
    <div className="shopColors">
      <p className="shopColors__title">Color</p>
      <div className="shopColors__content">
        <ul className="shopColors__ul">
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--1" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--2" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--3" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--4" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--5" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--6" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--7" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--8" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--9" /></li>
          <li className="shopColors__li"><a href="#" className="shopColors__color shopColors__color--10" /></li>
        </ul>
      </div>
    </div>
  );
};

export default ShopColors;
