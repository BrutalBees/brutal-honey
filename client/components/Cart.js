import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../store/cart";
import CartProduct from "./CartProduct";
import styled from "styled-components";
import { StyledProductsLink, StyledProductPrice } from "./styles";

// Styled Components
const StyledCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 100px 200px;
`;

const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid #cdc5c4 0.5px;
`;

const StyledTotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  padding: 0px 10px;
  font-size: 16px;
  font-weight: 600;
`;

const StyledCheckoutLink = styled(StyledProductsLink)`
  align-self: flex-end;
  margin-right: 0px;
  margin-top: 30px;
`;

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
      <h1>Your Cart</h1>
      <StyledCart>
        {products && products.map(product =>
          <CartProduct
            key={product.id}
            product={product}
          />
        )}
      </StyledCart>
      <StyledTotalPrice>TOTAL ${subtotal}</StyledTotalPrice>
      <StyledCheckoutLink to="/checkout">CHECK OUT</StyledCheckoutLink>
    </StyledCartWrapper>
  )
};

export default Cart;
