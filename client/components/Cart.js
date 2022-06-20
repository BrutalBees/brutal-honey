import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../store/cart";
import styled from "styled-components";

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

const StyledCartRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 20px;
  border-bottom: solid #cdc5c4 0.5px;
  height: 150px;
`;

const StyledProductImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 10%;
`;

const StyledProductName = styled.div`
  display: flex;
  width: 20%;
  font-size: 15px;
  font-weight: 800;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 30px;
`;

const StyledProductPrice = styled(StyledProductName)`
  width: 15%;
  padding: 0px 30px;
  justify-content: flex-end;
  padding: 0px 30px;
`;

const StyledProductQuantity = styled.div`
  display: flex;
  width: 20%;
  padding: 0px 30px;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 30px;
  border: solid #e5991f 1px;
`;

const StyledQuantityInput = styled.input`
  display: flex;
  border: none;
  padding: 0;
  background-color: white;
  margin: 0;
`;

const StyledQuantityButton = styled.button`
  display: flex;
  border: none;
  background-color: white;
`;


// Cart Component
const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [ products, setProducts ] = useState(cart.products);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchCart()) }, [dispatch]);
  useEffect(() => setProducts(cart.products), [cart]);

  return(
    <StyledCartWrapper>
      <h1>Your Cart</h1>
      <StyledCart>
        {products && products.map(product =>
          <StyledCartRow key={product.id}>
            <StyledProductImage image={product.imageUrl[0]}></StyledProductImage>
            <StyledProductName>{product.productName}</StyledProductName>
            <StyledProductPrice>${product.price}</StyledProductPrice>
            <StyledProductQuantity>
              <form>
                <StyledQuantityButton>{"-"}</StyledQuantityButton>
                <StyledQuantityInput
                  type="text"
                  value={product.cartProduct.quantity}
                />
                <StyledQuantityInput
                  type="submit"
                  name="Update"
                />
                <StyledQuantityButton>{"+"}</StyledQuantityButton>
              </form>
            </StyledProductQuantity>
            <StyledProductPrice>${product.price * product.cartProduct.quantity}</StyledProductPrice>
        </StyledCartRow>
        )}
      </StyledCart>
    </StyledCartWrapper>
  )
};

export default Cart;
