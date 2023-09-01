// CatList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, Button, Card, Row, Col } from 'antd';
import './TailwindStyles.css';
import './CatList.css';

const { Option } = Select;

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
    <div className="cat-list-container">
    <h1 className="text-3xl font-semibold mb-4">Cat Categories</h1>
    <select
      style={{ width: 200 }}
      placeholder="Select a category"
      onChange={handleCategoryChange}
    >
      {categories.map(category => (
        <Option key={category.id} value={category.id}>
          {category.name}
        </Option>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {catImages.map(cat => (
        <div key={cat.id} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img alt="Cat" src={cat.url} className="w-full h-auto object-cover object-center" />
          {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            {cat.category ? cat.category.name : 'Unknown Category'}
          </div> */}
        </div>
      ))}
    </div>
  </div>
  );
};

export default CatList;
