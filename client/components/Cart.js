import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, checkoutCart } from "../store/cart";
import CartProduct from "./CartProduct";
import {
  StyledCartWrapper,
  StyledCart,
  StyledEmptyCart,
  StyledTotalPrice,
  StyledCheckoutButton
} from "./styles";

// Cart Component
const Cart = (props) => {
  const cart = useSelector(state => state.cart);
  const [ products, setProducts ] = useState(cart.products);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchCart()) }, [dispatch]);
  useEffect(() => setProducts(cart.products), [cart, cart.isOrder]);
  const subtotal = products && products.reduce((totalPrice, product) => totalPrice + (product.price * product.cartProduct.quantity), 0);

  const handleCheckout = () => {
    dispatch(checkoutCart());
    props.history.push('/checkout');
  };

  return(
    <StyledCartWrapper>
      <h1>YOUR CART</h1>
      <StyledCart>
      {products && products.length ?
        (products.map(product =>
          <CartProduct
            key={product.id}
            product={product}
          />
        ))
      :
      <StyledEmptyCart>Looks like your cart is empty</StyledEmptyCart>
      }
      </StyledCart>
      <StyledTotalPrice>TOTAL ${subtotal}</StyledTotalPrice>
      <StyledCheckoutButton onClick={handleCheckout}>CHECK OUT</StyledCheckoutButton>
    </StyledCartWrapper>
  )
};

export default Cart;