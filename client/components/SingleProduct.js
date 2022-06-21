import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';
import { updateCart } from '../store/cart';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import {
  StyledProductsLink,
  StyledQuantityForm,
  StyledProductQuantity,
  StyledQuantityButton,
  StyledQuantityInput
} from './styles';

// Styled Components
const StyledTopWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  // gap: 300px;
  align-items: center;
`;

const StyledSingleProductImg = styled.img`
  display: flex;
  width: 350px;
  height: 400px;
  margin: 50px;
  border: 2px solid brown;
  border-radius: 5px;
`;

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSingledProd = styled.div`
  background-image: url('https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
`;
const StyledProductQuantityForm = styled(StyledQuantityForm)`
  padding: 0px;
`;

const StyledAddToCartBtn = styled.button`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  background-color: rgb(245, 219, 139);
  color: black;
  border: solid rgb(245, 219, 139) 1px;
  &:hover {
    color: rgb(245, 219, 139);
    background-color: white;
  }
`;

// Single Product Component
const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  const [ quantity, setQuantity ] = useState(1);

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
    dispatch(updateCart(product.id, quantity - 1))
    // by default quantity is 1 when product is added to cart
  };

  return (
    <StyledSingledProd>
      <StyledTopWrapper>
        <StyledSingleProductImg src={[product.imageUrl]} />
        <StyledProductInfo>
          <Card border="light" style={{ width: '28rem' }}>
            <Card.Body>
              <Card.Title as="h1">{product.productName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                $ {product.price}
              </Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
              <StyledProductQuantityForm>
                <StyledProductQuantity>
                  <StyledQuantityButton
                    name="minus"
                    onClick={handleQtyChange}
                  >{"-"}</StyledQuantityButton>
                  <StyledQuantityInput
                    type="text"
                    name={product.id}
                    value={quantity}
                    onChange={handleChange}
                  />
                  <StyledQuantityButton
                    name="plus"
                    onClick={handleQtyChange}
                  >{"+"}</StyledQuantityButton>
                </StyledProductQuantity>
              </StyledProductQuantityForm>
              <StyledAddToCartBtn
                onClick={handleAddToCart}
              >Add to Cart</StyledAddToCartBtn>
            </Card.Body>
          </Card>
        </StyledProductInfo>
      </StyledTopWrapper>
    </StyledSingledProd>
  );
};

export default SingleProduct;
