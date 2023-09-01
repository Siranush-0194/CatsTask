// src/App.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCatImages } from './component/CatAction';
import Navbar from './shared/Categories';
import CatImages from './component/CatList';


import './App.css';

const App = ({ selectedCategory, fetchCatImages }) => {
  useEffect(() => {
    if (selectedCategory) {
      fetchCatImages(selectedCategory);
    }
  }, [selectedCategory, fetchCatImages]);

  return (
    <div className="App">
      <h1>Cat Image Viewer</h1>
      <Navbar />
      <CatImages />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory,
});

const mapDispatchToProps = {
  fetchCatImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);