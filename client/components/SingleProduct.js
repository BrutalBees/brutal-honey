import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';
import styled from 'styled-components';

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

const SingleProduct = (props) => {
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
        <AddToCartBtn>Add to Cart</AddToCartBtn>
      </TopRtWrapper>
    </div>
  );
};
export default SingleProduct;

// TODO: style
// TODO: quantity btn
