import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cart from "../components/CartTest/Cart";
import { requestCartIfNeeded } from "../actions";

const AsyncApp = props => {

  console.log(props);

  const { dispatch, cart, isFetching, lastUpdated } = props;

  useEffect(() => {
    dispatch(requestCartIfNeeded());
  }, []);

  return (
    <div>
      <p>
        {lastUpdated && (
          <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
          </span>
        )}
      </p>
      {isFetching && cart.length === 0 && <h2>Loading...</h2>}
      {!isFetching && cart.length === 0 && <h2>Empty.</h2>}
      {cart.length > 0 && (
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <Cart cart={cart} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = props => {
  console.log(props);
  return {
    cart: []
  }
};

export default connect(
  mapStateToProps,
)(AsyncApp);
