import React from 'react';
import "../../Core/Styles";
import "./CallToAction.scss";

const CallToAction = () => {
  const imgUrl = 'cta-1.jpg';

  return (
    <div className="callToAction">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="callToAction__content"
              style={ { backgroundImage: `url(${require("../../../img/cta/" + imgUrl)})` } } >
              <div className="callToAction__textBox">
                <div>
                  <h6 className="callToAction_h6">-60%</h6>
                  <h2 className="callToAction_h2">Global Sale</h2>
                  <a href="#" className="btn essence-btn">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
