import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


 const CategoriesAPI = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

 }


 export default CategoriesAPI;
   