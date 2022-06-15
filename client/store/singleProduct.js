import axios from 'axios';

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';

export const setSingleProject = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product,
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setSingleProject(data));
  };
};

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
