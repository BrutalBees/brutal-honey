import React from "react";
import styled from "styled-components";

// STYLED COMPONENTS
const StyledItemWrapper = styled.div`
  width: 255px;
  height: 360px;
  border: solid grey 1px;
`;

const ProductIndexItem = (props) => {
  const { product } = props;
  return (
    <StyledItemWrapper>
      {product.productName}
    </StyledItemWrapper>
  )
};

export default ProductIndexItem;
