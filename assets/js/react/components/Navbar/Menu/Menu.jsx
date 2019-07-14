import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import '../../../../Core/Fonts'
import './Menu.scss';

class Menu extends Component {
  render() {
    return(
      <Sidebar handleClick={this.props.handleClick} open={this.props.open}>
        <div className="menu">
          <ul className="menu__list">
            <li className="menu__item">products</li>
            <li className="menu__item">terms of use</li>
            <li className="menu__item">contact</li>
          </ul>
        </div>
      </Sidebar>
    );
  }
}

export default Menu;
