import React, { useState, useEffect } from 'react';
import './ListWidget.scss';
import { firestore } from "../../Firebase";
import { collectIdsAndDocs } from "../../Firebase/utilities";

const ListWidgetLi = ({ category, categories }) => {
  return (
    <li>
      <span className="listWidget__categoryName">{category.name}</span>
      <ul className="subListWidget">
        {categories.map(subCategory => {
          if (subCategory.parentId === category.id) {
            return (<li key={subCategory.id}><a className="subListWidget__link" href="#">{subCategory.name}</a></li>);
          }
        })}
      </ul>
    </li>
  );
};

const ListWidget = () => {
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
    <div className="listWidget">
      <h6 className="listWidget__title">Catagories</h6>
      <div>
        <ul className="listWidget__ul">
          {categories.map(category => {
            if (category.parentId === "") {
              return (<ListWidgetLi key={category.id} categories={categories} category={category} />);
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListWidget;
