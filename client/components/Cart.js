import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, checkoutCart } from "../store/cart";
import CartProduct from "./CartProduct";
import styled from "styled-components";
import { StyledProductsLink } from "./styles";

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

const StyledCheckoutLink = styled(StyledProductsLink)`
  align-self: flex-end;
  margin-right: 0px;
`;

// Cart Component
const Cart = (props) => {
  const cart = useSelector(state => state.cart);
  const [ products, setProducts ] = useState(cart.products);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchCart()) }, [dispatch]);
  useEffect(() => setProducts(cart.products), [cart, cart.isOrder]);
  const subtotal = products && products.reduce((totalPrice, product) => totalPrice + (product.price * product.cartProduct.quantity), 0);
  useEffect(() => setProducts(cart.products), [cart]);

  const handleCheckout = () => {
    dispatch(checkoutCart());
    props.history.push('/checkout');
  };

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
      <StyledCheckoutButton onClick={handleCheckout}>CHECK OUT</StyledCheckoutButton>
      <StyledCheckoutLink to="/home">CHECK OUT</StyledCheckoutLink>
    </StyledCartWrapper>
  )
};

export default Cart;
