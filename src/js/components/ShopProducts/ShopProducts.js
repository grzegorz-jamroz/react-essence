import React, { useEffect } from "react";
import "./ShopProducts.scss";
import SingleProduct from "../SingleProduct";
import ShopTopBar from "../ShopTopBar";
import useProductsRequest from "../../hooks/useProductsRequest";
import { connect } from "react-redux";

const ShopProducts = ({filters}) => {
  const [
    { status, response: products },
    requestProducts
  ] = useProductsRequest(filters);

  useEffect(() => {
    requestProducts();
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

const mapStateToProps = ({ shopFiltersReducer: { sortBy } }) => {
  console.log(sortBy);
  return { filters: { sortBy } };
};

export default connect(mapStateToProps)(ShopProducts);
