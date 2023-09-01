// src/App.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCatImages } from './redux/actions';
import Navbar from './components/Navbar';
import CatImages from './components/CatImages';
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