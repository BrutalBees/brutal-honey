import axios from "axios";

// Action Types
const SET_CART = "SET_CART";
const UPDATED_CART = "UPDATED_CART";

// Action Creators
const setCart = (cart) => {
  return {
    type: SET_CART,
    cart
  }
};

const gotUpdatedCart = (updatedCart) => {
  return {
    type: UPDATED_CART,
    updatedCart
  }
};

// Thunk Creators
export const fetchCart = () => {
  const token = window.localStorage.getItem('token');
  return async (dispatch) => {
    const { data: cart } = await axios.get('/api/cart', {
      headers: {
        authorization: token
      }
    });
    dispatch(setCart(cart));
  }
};

export const updateCart = (productId, quantity) => {
  const cartUpdate = { productId, quantity };
  const token = window.localStorage.getItem('token');
  return async (dispatch) => {
    const { data: updatedCart } = await axios.post('/api/cart', cartUpdate, {
      headers: {
        authorization: token
      }
    });
    dispatch(gotUpdatedCart(updatedCart));
  }
};

// Cart Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    case UPDATED_CART:
      return action.updatedCart;
    default:
      return state;
  }
};
