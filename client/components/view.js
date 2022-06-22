import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../store/cart';
import { fetchSingleProduct } from '../store/singleProduct';
import styled from 'styled-components';
import {
  StyledQuantityForm,
  StyledProductQuantity,
  StyledQuantityButton,
  StyledQuantityInput,
} from './styles';
import { updateCart } from '../store/';
import products from '../store/products';

// Styled Components

const StyledTopWrapper = styled.div`
  display: flex;
  flex-direction: row
  align-items: center;
  gap: 100px;
`;

const StyledSingleProductImg = styled.img`
  width: 450px;
  height: 500px;
  margin: 50px;
  border: 2px solid brown;
  border-radius: 5px;
  background-color: #f2eef2;
`;
const StyledProdInfoWrap = styled.div`
  display: flex;
  width: 450px;
  height: 500px;
  margin: 50px;
  border: 2px solid #eeeeee;
  border-radius: 5px;
`;

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ebe8eb;
`;
const StyledProductName = styled.h1`
  letter-spacing: 1.5;
  margin: 3px;
`;
const StyledDescription = styled.p`
  display: block;
  align-text: center;
  margin: 3px;
  line-height: 1.8;
`;

const StyledPrice = styled.h3`
  align-text: center;
  margin: 5px;
  align-items: center;
`;

const StyledAddToCartBtn = styled.button`
  color: #303030;
  border-radius: 2px;
  background-color: #f5db8b;
  width: 200px;
  text-align: center;
order: 4;
  curser: pointer;
&:hover {
  opacity: 50%;
  transition: 100ms ease;
}
  }
`;

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, [dispatch]);

  const handleChange = (evt) => {
    evt.preventDefault();
    setQuantity(evt.target.value);
  };

  const handleQtyChange = (evt) => {
    evt.preventDefault();
    evt.target.name === 'minus' && setQuantity(quantity - 1);
    evt.target.name === 'plus' && setQuantity(quantity + 1);
  };

  const handleAddToCart = (evt) => {
    dispatch(updateCart(product.id, quantity - 1));
    // by default quantity is 1 when product is added to cart
  };
  return (
    <StyledProdPage>
      <StyledTopWrapper>
        <StyledSingleProductImg src={[product.imageUrl]} />
        <StyledProdInfoWrap>
          <StyledProductInfo>
            <StyledProductName>{product.productName}</StyledProductName>
            <StyledPrice>${product.price}.95</StyledPrice>
            <StyledDescription>{product.description}</StyledDescription>
            <StyledProductQuantityForm>
              <StyledProductQuantity>
                <StyledQuantityButton name="minus" onClick={handleQtyChange}>
                  {'-'}
                </StyledQuantityButton>
                <StyledQuantityInput
                  type="text"
                  name={product.id}
                  value={quantity}
                  onChange={handleChange}
                />
                <StyledQuantityButton name="plus" onClick={handleQtyChange}>
                  {'+'}
                </StyledQuantityButton>
              </StyledProductQuantity>
            </StyledProductQuantityForm>
            <StyledAddToCartBtn onClick={handleAddToCart}>
              Add to Cart
            </StyledAddToCartBtn>
          </StyledProductInfo>
        </StyledProdInfoWrap>
      </StyledTopWrapper>
    </StyledProdPage>
  );
};

export default SingleProduct;
