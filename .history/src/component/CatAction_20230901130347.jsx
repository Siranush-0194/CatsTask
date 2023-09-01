import axios from "axios";

export const fetchCats = (categoryId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoryId}`
      );
      dispatch({ type: "FETCH_CATS_SUCCESS", payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};
