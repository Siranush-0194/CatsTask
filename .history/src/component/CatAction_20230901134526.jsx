// src/redux/actions.js
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const FETCH_CAT_IMAGES_SUCCESS = 'FETCH_CAT_IMAGES_SUCCESS';

export const selectCategory = (categoryId) => ({
  type: SET_SELECTED_CATEGORY,
  payload: categoryId,
});

export const fetchCatImages = (categoryId) => async (dispatch) => {
  try {
    const response = await fetch(
      https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${categoryId}
    );
    const data = await response.json();
    dispatch({ type: FETCH_CAT_IMAGES_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching cat images:', error);
  }
};