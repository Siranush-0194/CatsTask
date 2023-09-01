import axios from 'axios';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const FETCH_CAT_IMAGES_SUCCESS = 'FETCH_CAT_IMAGES_SUCCESS';

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/categories');
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const selectCategory = (categoryId) => ({
  type: SET_SELECTED_CATEGORY,
  payload: categoryId,
});


export const fetchCatImages = (categoryId, page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${categoryId}`
    );
    dispatch({ type: FETCH_CAT_IMAGES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching cat images:', error);
  }
};
