import React, { useEffect, useState } from 'react';
import { firestore } from '../../Firebase';
import ProductSlide from "../ProductSlide";
import { collectIdsAndDocs } from "../../Firebase/utilities";
import './ShopProducts.scss';

const ShopProducts = () => {
  const [products, setProducts] = useState([]);

  const requestProducts = async () => {
    const snapshot = await firestore.collection('products').get();
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
          <div className="shopProducts__topbar d-flex align-items-center justify-content-between">
            <div className="shopProducts__total">
              <p><span>186</span> products found</p>
            </div>
            <div className="shopProducts__sorting d-flex">
              <p>Sort by:</p>
              <form action="#" method="get">
                <select name="select" id="sortByselect" style={{display: "none"}}>
                  <option value="value">Highest Rated</option>
                  <option value="value">Newest</option>
                  <option value="value">Price: $$ - $</option>
                  <option value="value">Price: $ - $$</option>
                </select>
                <div className="nice-select" tabIndex="0"><span className="current">Highest Rated</span>
                  <ul className="list">
                    <li data-value="value" className="option selected">Highest Rated</li>
                    <li data-value="value" className="option">Newest</li>
                    <li data-value="value" className="option">Price: $$ - $</li>
                    <li data-value="value" className="option">Price: $ - $$</li>
                  </ul>
                </div>
                <input type="submit" className="d-none" value=""/>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {products.map(product => (
          <ProductSlide key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
