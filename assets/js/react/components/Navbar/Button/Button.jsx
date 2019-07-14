import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  state = {
    border: this.props.border
  };

  render() {
    return(
        <div onClick={this.props.handleClick} className={this.getButtonClasses()}>
          {this.props.children}
        </div>
    );
  }

  getButtonClasses() {
    let classes = 'navbarButton';

    switch(this.state.border) {
      case 'bRight':
        classes += ' navbarButton--bRight';
        break;
    }

    return classes;
  }
}

export default Button;
