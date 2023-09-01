// CatList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './CatList.css';

// const { Option } = select;

const CatList = () => {
  const [categories, setCategories] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [catImages, setCatImages] = useState([]);

  // Fetch the list of categories from the API
  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${selectedCategory}`)
        .then(response => {
          setCatImages(response.data);
          console.log(response.data);

        })
        .catch(error => {
          console.error('Error fetching cat images:', error);
        });
    }
  }, [selectedCategory, page]);

  const handleCategoryChange = value => {
    setSelectedCategory(value);
  };

  const handlePageChange = direction => {
    setPage(prevPage => prevPage + direction);
  };

  return (
    <div>
    <label>Cat Categories</label>
    <select
      style={{ width: 200 }}
      placeholder="Select a category"
      onChange={handleCategoryChange}
    >
      {categories.map(category => (
        <option >
          {category.name}
          {console.log(category.name)}
        </option>
      ))}
    </select>
    <button
      type="primary"
      onClick={() => handlePageChange(-1)}
      disabled={page === 1}
    >
      Previous Page
    </button>
    {/* <Button type="primary" onClick={() => handlePageChange(1)}>
      Next Page
    </Button> */}
    <div >
      {catImages.map(cat => (
        <div key={cat.id} >
          <img alt="Cat" src={cat.url} />
       
        </div>
      ))}
    </div>
  </div>
  );
};

export default CatList;
