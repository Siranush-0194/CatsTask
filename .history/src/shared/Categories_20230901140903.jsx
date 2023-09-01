// src/components/Navbar.js
import React from 'react';
import { connect } from 'react-redux';
import { selectCategory, fetchCatImages } from '../component/CatAction';

const Navbar = ({ categories, selectedCategory, selectCategory, fetchCatImages }) => {
  const handleCategoryClick = (categoryId) => {
    selectCategory(categoryId);
    fetchCatImages(categoryId);
  };

  return (
    <div className="navbar">
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={category.id === selectedCategory ? 'active' : ''}
          >
        {console.log(category.name)}
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  selectedCategory: state.selectedCategory,
});

const mapDispatchToProps = {
  selectCategory,
  fetchCatImages,
};

export default connect(mapStateToProps, mapDispatchToProps,Navbar);