import axios from "axios";

const token = window.localStorage.getItem('token');

// Action Types
const SET_PRODUCTS = "SET_PRODUCTS";
const GOT_NEW_PRODUCT = 'GOT_NEW_PRODUCT';
const GOT_UPDATED_PRODUCT = 'GOT_UPDATED_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Action Creators
const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products
  }
};

const gotNewProduct = (newProduct) => {
  return {
    type: GOT_NEW_PRODUCT,
    newProduct
  }
};

const gotUpdatedProduct = (updatedProduct) => {
  return {
    type: GOT_UPDATED_PRODUCT,
    updatedProduct
  }
};

const deletedProductFromServer = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId
  }
};

// Thunk Creators
export const fetchProducts = (search) => {
  return async (dispatch) => {
    const { data: products } = search ?
    await axios.get(`/api/products${search}`) // api/products?category=Organic
    :
    await axios.get(`/api/products`)
    dispatch(setProducts(products));
  }
};

export const addProduct = (productToAdd) => {
  return async (dispatch) => {
    const { data: newProduct } = await axios.post('/api/products', productToAdd, {
      headers: {
        authorization: token
      }
    });
    dispatch(gotNewProduct(newProduct));
  }
};

export const updateProduct = (productId, productUpdate) => {
  return async (dispatch) => {
    const { data: updatedProduct } = await axios.put(`/api/products/${productId}`, productUpdate, {
      headers: {
        authorization: token
      }
    });
    dispatch(gotUpdatedProduct(updatedProduct));
  }
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/products/${productId}`, {
        headers: {
          authorization: token
        }
      });
      dispatch(deletedProductFromServer(productId));
    } catch (error) {
      console.log(error);
    }
  }
};

// Products Reducer
export default (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case GOT_NEW_PRODUCT:
      return [...state, action.newProduct];
    case GOT_UPDATED_PRODUCT:
      return state.map(product => product.id === action.updatedProduct.id ? action.updatedProduct : product);
    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.productId);
    default:
      return state;
  }
};
