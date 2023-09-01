// CatList.js
import React, { useEffect } from "react";

import { Connect } from "react-redux";
import { fetchCats } from "./CatAction";

const CatList = ({ cats, fetchCats, categoryId }) => {
  useEffect(() => {
    fetchCats(categoryId);
  }, [categoryId, fetchCats]); 
   
    
    

  return (
    <div className="cat-list">
      {cats.map((cat) => (
        <img key={cat.id} src={cat.url} alt="Cat" />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cats: state.cats.cats,
  };
};

export default Connect(mapStateToProps, { fetchCats })(CatList);
