// src/components/Navbar.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, selectCategory, fetchCatImages } from '../redux/actions';

const Navbar = ({ categories, selectedCategory, fetchCategories, selectCategory }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleCategoryClick = (categoryId) => {
    selectCategory(categoryId);
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
  fetchCategories,
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
