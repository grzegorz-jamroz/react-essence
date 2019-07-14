import React, { Component } from 'react';
import './MenuToggler.scss';

class MenuToggler extends Component {
  render() {
    return (
      <span className={this.getTogglerClasses()}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    );
  }

  getTogglerClasses = () => {
    let classes = 'navbarButton__menuToggler';

    if (this.props.open) {
      classes += ' navbarButton__menuToggler--open';
    }

    return classes;
  }
}

export default MenuToggler;
