// src/redux/reducers.js
import { combineReducers } from 'redux';
import {
  SET_SELECTED_CATEGORY,
  FETCH_CAT_IMAGES_SUCCESS,
} from './actions';

const categoriesReducer = (state = [], action) => {
  // Define your categories here, e.g., [{ id: '1', name: 'Category 1' }, ...]
  return state;
};

const selectedCategoryReducer = (state = null, action) => {
  if (action.type === SET_SELECTED_CATEGORY) {
    return action.payload;
  }
  return state;
};

const catImagesReducer = (state = [], action) => {
  if (action.type === FETCH_CAT_IMAGES_SUCCESS) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer,
  catImages: catImagesReducer,
});

export default rootReducer;