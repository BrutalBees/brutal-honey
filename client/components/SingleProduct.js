import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';
import styled from 'styled-components';

const StyledTopWrapper = styled.section`
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
`;

const StyledAddToCartBtn = styled.button`
  display: flex;
  color: #303030;
  border-radius: 2px;
  background-color: #f5db8b;
  width: 300px;
  align-text: center;
  margin: 1em;
  padding: 0.25em 1em;
  align-self: flex-end;
  justify content: end;
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
`;

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  border-style: solid'
  width: 300px;
  // align-self: flex-end;

`;
const StyledDescription = styled.p`
  letter-spacing: 1.5;
  align-tex: center;
  width: 50px;
  height: 400px;
  margin-left: 400px;
  margin-top: 100px;
  padding-right: 500px;
  // overflow-wrap: normal;
  order: 2;
`;
const StyledProductName = styled.h1`
  letter-spacing: 1.5;
  align-tex: center;
  // width: 350px;
  // height: 400px;
  margin-left: 400px;
  margin-top: 50px;
  padding-bottom: 2px;
  order: 1;
`;

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, [dispatch]);
  return (
    <StyledTopWrapper>
      <StyledSingleProductImg src={[product.imageUrl]} />
      <StyledProductInfo>
        <StyledProductName>{product.productName}</StyledProductName>
        <StyledDescription>{product.description}</StyledDescription>
      </StyledProductInfo>
    </StyledTopWrapper>
    // <div>
    //   <StyledTopWrapper>
    //     {/* <div> */}
    //     <StyledSingleProductImg>
    // <img src={[product.imageUrl]} />
    //     </StyledSingleProductImg>
    //     <StyledProductInfo>{product.productName}</StyledProductInfo>
    //     <h3>${product.price}</h3>
    //     <hr />
    //     <StyledDescription>
    //       <p>{product.description}</p>
    //     </StyledDescription>
    //     <StyledAddToCartBtn>Add to Cart</StyledAddToCartBtn>
    //     {/* </div> */}
    //   </StyledTopWrapper>
    // </div>
  );
};

export default SingleProduct;

// TODO: style
// TODO: quantity btn
