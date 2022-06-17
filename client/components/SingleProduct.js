import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';
import Navbar from './Navbar';
import styled from 'styled-components';
import { addProductToCart } from '../store/cart';

const AddToCartBtn = styled.button`
  display: flex;
  color: #303030;
  border-radius: 2px;
  background-color: #f5db8b;
  width: 300px;
  align-text: center;
  margin: 1em;
  padding: 0.25em 1em;
  &:hover {
    curser: pointer;
    background-color: #b48139;
    transition: ;
  }
`;

const ProductImg = { width: '300px', height: '350px' };
const TopRtWrapper = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: felx-end;
  padding: '1rem';
`;

const Description = styled.p``;

const StyledSpash = styled.div`
  background-image: url('https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

const SingleProduct = (props) => {
  const handleClick = (product)=>{
    this.props.addProductToCart(product);
  }
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, [dispatch]);
  return (
    <div>
      {/* <StyledSpash> */}
      {/* </StyledSpash> */}
      {/* <ProductImg> */}
      <img src={[product.imageUrl]} style={ProductImg} />
      {/* </ProductImg> */}
      {/* </StyledSpash> */}
      <TopRtWrapper>
        <h2>{product.productName}</h2>
        <h3>{product.price}</h3>
        <hr />
        <p>{product.description}</p>
        <AddToCartBtn onClick={handleClick}>Add to Cart</AddToCartBtn>
      </TopRtWrapper>
    </div>
  );
};
export default SingleProduct;

// TODO: style
// TODO: quantity btn
