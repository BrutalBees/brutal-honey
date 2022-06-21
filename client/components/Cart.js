import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../store/cart";
import CartProduct from "./CartProduct";
import styled from "styled-components";
import {
  StyledProductsLink,
  StyledProductPrice,
  StyledCartWrapper,
  StyledCart,
  StyledEmptyCart,
  StyledTotalPrice,
  StyledCheckoutLink
} from "./styles";

// Cart Component
const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [ products, setProducts ] = useState(cart.products);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchCart()) }, [dispatch]);
  useEffect(() => setProducts(cart.products), [cart]);
  const subtotal = products && products.reduce((totalPrice, product) => totalPrice + (product.price * product.cartProduct.quantity), 0);

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
      <StyledCheckoutLink to="/checkout">CHECK OUT</StyledCheckoutLink>
    </StyledCartWrapper>
  )
};

export default Cart;
