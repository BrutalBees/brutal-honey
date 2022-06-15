import axios from 'axios'
//  ACTION TYPES
const ADD_TO_CART ='ADD_TO_CART';
const UPDATE_QTY = 'UPDATE_QTY';

// ACTION CREATORS
const addToCart = (cartProduct) => ({
  type: ADD_TO_CART,
  payload: cartProduct
});

const updateQty = (cartProduct, qty) => ({
  type: UPDATE_QTY,
  cartProduct,
  qty
});

//  Thunks

export const addItemToCart = (cartProduct) => async dispatch => {
        const { data } = await axios.post(`/api/orders`, cartProduct)
        dispatch(addToCart(data))
}

// REDUCER

const initialState = {
// cart starts out as empty array until product objects are added
  cart: []
};

const cartReducer = (state = initialState, action) => {
    
}