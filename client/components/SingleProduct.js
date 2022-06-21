import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';
import styled from 'styled-components';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { StyledProductsLink } from './styles';
// import {
//   StyledSplash,
//   StyledProductIndexWrapper,
//   StyledProductsLink,
// } from './styles';
import { fetchProducts } from '../store/products';

const StyledTopWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  // gap: 300px;
  align-items: center;
`;

const StyledAddToCartBtn = styled.button`
  display: flex;
  color: #303030;
  border-radius: 2px;
  background-color: #f5db8b;
  width: 200px;
  text-align: center;

  curser: pointer;
&:hover {
  opacity: 50%;
  transition: 100ms ease;
}
  }
`;

const StyledSingleProductImg = styled.img`
  // display: flex;
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
const StyledDescription = styled.p`
  // text-align: justify;
  width: 20px;
  margin-left: 400px;
  margin-right: 50px;
  line-height: 1.5em;
  letter-spacing: 1.5;
  overflow-wrap: normal;
  order: 2;
`;
const StyledProductName = styled.h1`
  letter-spacing: 1.5;
  align-tex: center;
  width: 350px;
  height: 400px;
  margin-left: 400px;
  margin-top: 50px;
  padding-bottom: 2px;
  order: 1;
`;

const StyledSingledProd = styled.div`
  background-image: url('https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
`;

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, [dispatch]);
  return (
    <StyledSingledProd>
      <StyledTopWrapper>
        <StyledSingleProductImg src={[product.imageUrl]} />
        <StyledProductInfo>
          <Card border="light" style={{ width: '28rem' }}>
            <Card.Body>
              <Card.Title as="h1">{product.productName}</Card.Title>
              {/* <StyledProductName>{product.productName}</StyledProductName> */}
              <Card.Subtitle className="mb-2 text-muted">
                $ {product.price}
              </Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
              <StyledProductsLink>Add to Cart</StyledProductsLink>
            </Card.Body>
          </Card>
        </StyledProductInfo>
      </StyledTopWrapper>
    </StyledSingledProd>
  );
};

export default SingleProduct;
