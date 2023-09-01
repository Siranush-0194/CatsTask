// src/components/CatImages.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCatImages } from '../redux/actions';

const CatImages = ({ catImages, selectedCategory, fetchCatImages }) => {
  useEffect(() => {
    if (selectedCategory) {
      fetchCatImages(selectedCategory);
    }
  }, [selectedCategory, fetchCatImages]);

  return (
    <div className="cat-images">
      {catImages.map((cat) => (
        <img key={cat.id} src={cat.url} alt="Cat" />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  catImages: state.catImages,
  selectedCategory: state.selectedCategory,
});

const mapDispatchToProps = {
  fetchCatImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatImages);
