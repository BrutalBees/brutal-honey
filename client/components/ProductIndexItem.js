import React from "react";
import styled from "styled-components";

// STYLED COMPONENTS
const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 360px;
  border: solid grey 1px;
`;

const StyledItemImage = styled.div`
  display: flex;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
`;

const StyledProductName = styled.div`
  display: flex;
`;

const ProductIndexItem = (props) => {
  const { product } = props;
  return (
    <StyledItemWrapper>
      <StyledItemImage image={product.imageUrl[0]} />
      <StyledProductName>{product.productName.toUpperCase()}</StyledProductName>
    </StyledItemWrapper>
  )
};

export default ProductIndexItem;
