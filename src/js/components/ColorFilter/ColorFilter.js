import React from "react";
import "./ColorFilter.scss";

const ColorFilter = () => {
  return (
    <div className="colorFilter">
      <p className="colorFilter__title">Color</p>
      <div className="colorFilter__content">
        <ul className="colorFilter__ul">
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--1" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--2" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--3" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--4" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--5" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--6" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--7" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--8" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--9" />
          </li>
          <li className="colorFilter__li">
            <span className="colorFilter__color colorFilter__color--10" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ColorFilter;
