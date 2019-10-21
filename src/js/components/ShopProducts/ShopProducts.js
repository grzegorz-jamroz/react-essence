import React, { useEffect, useState } from "react";
import { firestore } from "../../Firebase";
import "./ShopProducts.scss";
import SingleProduct from "../SingleProduct";
import { collectIdsAndDocs } from "../../Firebase/utilities";
import ShopTopBar from "../ShopTopBar";

const ShopProducts = () => {
  const [products, setProducts] = useState([]);

  const requestProducts = async () => {
    const snapshot = await firestore.collection("products").get();
    const products = snapshot.docs.map(collectIdsAndDocs);
    setProducts(products);
  };

  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <div className="shopProducts">
      <div className="row">
        <div className="col-12">
          <ShopTopBar />
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
  );
};

export default ShopProducts;
