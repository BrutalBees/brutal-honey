import axios from 'axios'
//  ACTION TYPES
const ADD_TO_CART ='ADD_TO_CART';
const UPDATE_QTY = 'UPDATE_QTY';

// ACTION CREATORS
const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
});

const updateQty = (cartProduct, qty) => ({
  type: UPDATE_QTY,
  cartProduct,
  qty
});

//  Thunks

export const addProductToCart = (cartProduct) => async dispatch => {
        const { data } = await axios.post(`/api/cart`, cartProduct)
        dispatch(addToCart(data))
}

// REDUCER

const initialState = {
// cart starts out as empty array until product objects are added
  cart: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state, 
               cart: [...state.cart,  action.cartProduct]
            }
        default:
            return state
    }
}