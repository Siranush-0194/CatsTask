import React from "react";
import { useState,useEffect } from "react";


const CatsList = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/categories')
      .then(response => {
        setCategories(response.data);
        console.log(categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

 
}


export default CatsList;