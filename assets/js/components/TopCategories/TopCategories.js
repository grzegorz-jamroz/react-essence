import React, { useState, useEffect } from 'react';
import "../../Core/Styles";
import './TopCategories.scss';
import TopCategory from "../TopCategory";
import { firestore } from "../../Firebase";
import { collectIdsAndDocs } from "../../Firebase/utilities";

const TopCategories = () => {
  const [categories, setCategories] = useState([]);

  const requestCategories = async () => {
    const snapshot = await firestore.collection('categories').get();
    const categories = snapshot.docs.map(collectIdsAndDocs);
    setCategories(categories);
  };

  useEffect(() => {
    requestCategories();
  }, []);

  return (
    <div className="topCategories">
      <div className="container">
        <div className="topCategories__row row">
          {categories.map(category => {
            if (category.parentId === "") {
              return (
                <TopCategory key={category.id} category={category} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
