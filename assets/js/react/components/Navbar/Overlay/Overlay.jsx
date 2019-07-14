import React, { Component } from 'react';
import './Overlay.scss';

class Overlay extends Component {
  render() {
    return (
        <div className={this.getOverlayClasses()}>

        </div>
    );
  }

  getOverlayClasses = () => {
    let classes = 'overlay';

    if (this.props.open) {
      classes += ' overlay--open';
    }

    return classes;
  };
}

export default Overlay;
