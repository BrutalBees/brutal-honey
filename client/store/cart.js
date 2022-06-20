import axios from "axios";

// Action Types
const SET_CART = "SET_CART";

// Action Creators
const setCart = (cart) => {
  return {
    type: SET_CART,
    cart
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

// Cart Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
};
