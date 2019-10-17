import React, { useEffect } from "react";
import "../../Core/Styles";
import "./TopCategories.scss";
import TopCategory from "../TopCategory";
import useTopCategoriesRequest from "../../hooks/useTopCategoriesRequest";

const TopCategories = () => {
  const [
    { status, response: categories },
    requestTopCategories
  ] = useTopCategoriesRequest();
  useEffect(() => {
    requestTopCategories().then();
  }, []);

  return (
    <div className="topCategories">
      <div className="container">
        <div className="topCategories__row row">
          {status === "FETCHING" && <div>Fetching...</div>}
          {status === "SUCCESS" &&
            categories.map(category => {
              if (category.parentId === "") {
                return <TopCategory key={category.id} category={category} />;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
