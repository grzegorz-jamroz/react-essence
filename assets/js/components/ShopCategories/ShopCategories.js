import React, { useState, useEffect } from 'react';
import './ShopCategories.scss';
import { firestore } from "../../Firebase";
import { collectIdsAndDocs } from "../../Firebase/utilities";
import ShopCategoriesList from "../ShopCategoriesList";

const ShopCategories = () => {
  const [categories, setCategories] = useState([]);

  const requestCategories = async () => {
    const snapshot = await firestore.collection('categories').get();
    let categories = snapshot.docs.map(collectIdsAndDocs);
    setCategories(categories);
  };

  useEffect(() => {
    requestCategories();
  }, []);

  return (
    <div className="shopCategories">
      <h6 className="shopCategories__title">Catagories</h6>
      <div className="shopCategories__content">
        <ShopCategoriesList categories={categories} />
      </div>
    </div>
  );
};

export default ShopCategories;
