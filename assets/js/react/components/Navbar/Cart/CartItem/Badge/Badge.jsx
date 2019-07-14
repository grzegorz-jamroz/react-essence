import React, { Component } from 'react';
import '../../../../../../Core/Fonts'
import './Badge.scss';

class Badge extends Component {
  render() {
    let content = this.props.children ? this.props.children : this.props.text;

    return (
      <div className="cartItemBadge" style={this.getStyles()}>
        {content}
      </div>
    );
  }

  getStyles = () => {
    let styles = {
      backgroundColor: this.props.bgColor,
    };

    if (this.props.marginRight) {
      styles.marginRight = this.props.marginRight;
    } else {
      styles.marginRight = this.props.marginRight;
    }

    if (this.props.color) {
      styles.color = this.props.color;
    } else {
      styles.color = '#ffffff';
    }

    return styles;
  }
}

export default Badge;
