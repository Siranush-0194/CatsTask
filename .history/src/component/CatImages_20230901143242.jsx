import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCatImages } from '../redux/actions';

const CatImages = ({ catImages, selectedCategory, fetchCatImages }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (selectedCategory) {
      fetchCatImages(selectedCategory, page);
    }
  }, [selectedCategory, fetchCatImages, page]);

  const handleSeeMore = () => {
    setPage(page + 1); // Increment the page to fetch more images
  };

  return (
    <div className="cat-images">
      {catImages.map((cat) => (
        <img key={cat.id} src={cat.url} alt="Cat" />
      ))}
      <button onClick={handleSeeMore}>See More</button>
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