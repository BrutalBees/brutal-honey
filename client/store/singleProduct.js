import axios from 'axios';

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';
const GOT_UPDATED_PRODUCT = 'GOT_UPDATED_PRODUCT';


// Action Creators
export const setSingleProject = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product,
  };
};

const gotUpdatedProduct = (updatedProduct) => {
  return {
    type: GOT_UPDATED_PRODUCT,
    updatedProduct
  }
};

// Thunk Creators
export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setSingleProject(data));
  };
};

export const updateSingleProduct = (productId, productUpdate) => {
  return async (dispatch) => {
    const { data: updatedProduct } = await axios.put(`/api/products/${productId}`, productUpdate);
    dispatch(gotUpdatedProduct(updatedProduct));
  }
};


// singleProduct Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product;
    case GOT_UPDATED_PRODUCT:
      return action.updatedProduct;
    default:
      return state;
  }
};
