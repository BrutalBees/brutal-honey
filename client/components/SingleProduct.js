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
  align-self: flex-end;
  justify content: end;
  curser: pointer;
&:hover {
  opacity: 50%;
  transition: 100ms ease;
}
  }
`;

const ProductImg = { width: '300px', height: '350px' };
// const Description = {
//   width: '250px',
//   justifyContent: 'end',
//   alignSelf: 'flexEnd',
//   margin: '0 0 24px',
// };

const Description = styled.p`
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5;
  width: 300px;
  align-self: flex-end;
`;

// const TopWrapper = styled.section`
//   display: flex;
//   flex-direction: row;
// `;

const TopWrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // text-align: center;
  height: 100vh;
`;

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, [dispatch]);
  return (
    <div>
      <TopWrapper>
        <div>
          {/* </StyledSpash> */}
          {/* <ProductImg> */}
          <span>
            <img src={[product.imageUrl]} style={ProductImg} />
            {/* </ProductImg> */}
            {/* </StyledSpash> */}
            <h2>{product.productName}</h2>
          </span>
          <h3>${product.price}</h3>
          <hr />
          <Description>{product.description}</Description>
          <AddToCartBtn>Add to Cart</AddToCartBtn>
        </div>
      </TopWrapper>
    </div>
  );
};

export default SingleProduct;

// TODO: style
// TODO: quantity btn
