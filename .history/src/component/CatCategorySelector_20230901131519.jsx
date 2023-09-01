// CatCategorySelector.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchCats } from "./redux/catActions";

const CatCategorySelector = ({ fetchCats }) => {
  const [categoryId, setCategoryId] = useState(1);

  const handleCategoryChange = (e) => {
    const newCategoryId = e.target.value;
    setCategoryId(newCategoryId);
    fetchCats(newCategoryId);
  };

  return (
    <div className="cat-category-selector">
      <label htmlFor="categorySelect">Select a Cat Category:</label>
      <select
        id="categorySelect"
        onChange={handleCategoryChange}
        value={categoryId}
      >
        <option value="1">Category 1</option>
        <option value="2">Category 2</option>
      </select>
    </div>
  );
};

export default connect(null, { fetchCats })(CatCategorySelector);
