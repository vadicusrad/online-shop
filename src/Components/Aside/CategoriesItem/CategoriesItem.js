import React from "react";
import "./CategoriesItem.css";

function CategoriesItem({ categoryName, setCurrentCategory }) {
  return (
    <li
      onClick={() => setCurrentCategory(categoryName)}
      className="Category-list-item"
    >
      {categoryName}
    </li>
  );
}

export default CategoriesItem;
