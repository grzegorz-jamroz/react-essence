import React, { Component } from 'react';
import Logo from './Button/Logo';
import Button from './Button';
import MenuToggler from './Button/MenuToggler';
import CartToggler from './Button/CartToggler';
import Menu from './Menu';
import Cart from './Cart';
import '../../../Core/Styles'
import './Navbar.scss';

class Navbar extends Component {
  state = {
    menuOpen: false,
    cartOpen: false,
    cartCounter: 6
  };

  render() {
    return(
      <React.Fragment>
        <div className="navbar">
          <div className="navbar__container">
            <div className="navbar__leftSite">
              <Button>
                <Logo />
              </Button>
            </div>
            <div className="navbar__rightSite">
              <Button handleClick={this.handleCartTogglerClick} border={'bRight'}>
                <CartToggler open={this.state.cartOpen} cartCounter={this.state.cartCounter} />
              </Button>
              <Button handleClick={this.handleMenuTogglerClick} border={'bRight'}>
                <MenuToggler open={this.state.menuOpen} />
              </Button>
            </div>
          </div>
        </div>
        <Menu handleClick={this.handleMenuTogglerClick} open={this.state.menuOpen} />
        <Cart handleClick={this.handleCartTogglerClick}
              increaseCounter={this.increaseCounter}
              decreaseCounter={this.decreaseCounter}
              open={this.state.cartOpen} />
      </React.Fragment>
    );
  }

  handleMenuTogglerClick = () => {
    if (this.state.menuOpen) {
      this.setState({menuOpen: false});
    } else {
      this.setState({menuOpen: true});
    }
  };

  handleCartTogglerClick = () => {
    if (this.state.cartOpen) {
      this.setState({cartOpen: false});
    } else {
      this.setState({cartOpen: true});
    }
  };

  increaseCounter = () => {
    this.setState((state) => ({
      cartCounter: state.cartCounter + 1
    }));
  };

  decreaseCounter = () => {
    this.setState((state) => ({
      cartCounter: state.cartCounter - 1
    }));
  };
}

export default Navbar

