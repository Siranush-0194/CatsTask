import React from 'react';
import { connect } from 'react-redux';

const CatImages = ({ catImages }) => {
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
});

export default connect(mapStateToProps)(CatImages);
