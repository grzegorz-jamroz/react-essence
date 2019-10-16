import Decimal from "decimal.js";
import { setCartTotal } from "../actions/cartActions";
import { connect } from "react-redux";

class Cart {
  constructor(props) {
    this.props = props;
  }

  setTotal = total => {
    this.props.setCartTotal(total);
  };

  removeCartItem = itemId => {
    console.log('elo');
    this.cartItems = this.cartItems.filter(
      item => item.product.id !== itemId
    );
  };

  increaseCartItemsQuantity = quantity => {
    this.cartItemsAmount = this.cartItemsAmount + quantity;
  };

  decreaseCartItemsQuantity = quantity => {
    this.cartItemsAmount = this.cartItemsAmount - quantity;
  };
}

const mapStateToProps = ({cartReducer: {cart}}) => ({
  cart: cart ?? {}
});

const mapDispatchToProps = dispatch => ({
  setCartTotal: total => dispatch(setCartTotal(total)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

