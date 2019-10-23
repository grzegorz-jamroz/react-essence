import React, { useEffect } from "react";
import "./ShopProducts.scss";
import SingleProduct from "../SingleProduct";
import ShopTopBar from "../ShopTopBar";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/shopFiltersActions";

const ShopProducts = ({status, products, fetchProducts}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {status === "FETCHING" && <div>Fetching...</div>}
      {status === "SUCCESS" && (
        <div className="shopProducts">
          <div className="row">
            <div className="col-12">
              <ShopTopBar foundNumber={products.length} />
            </div>
          </div>
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                <SingleProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ shopFiltersReducer: { productsStatus, products } }) => {
  return {
    products,
    status: productsStatus
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopProducts);
