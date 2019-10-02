import React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = ({text}) => {
  return (
    <div className="breadcrumb" style={{backgroundImage: `url(${require("../../../img/bg-img/breadcrumb.jpg")})`}}>
      <div className="container h-100">
        <div className="breadcrumb__row row h-100">
          <div className="col-12">
            <div className="breadcrumb__title">
              <h2 className="breadcrumb__h2">{text}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
