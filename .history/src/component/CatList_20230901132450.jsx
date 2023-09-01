// CatList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Select, Button, Card, Row, Col } from 'antd';
// import './TailwindStyles.css';
// import './CatList.css';

// const { Option } = select;

const CatList = () => {
  const [categories, setCategories] = useState([]);
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

  // Fetch cat images when the category or page changes
  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${selectedCategory}`)
        .then(response => {
            console.log(response.data);
          setCatImages(response.data);
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
    <h1 >Cat Categories</h1>
    <select
      style={{ width: 200 }}
      placeholder="Select a category"
      onChange={handleCategoryChange}
    >
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
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
