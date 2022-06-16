import React from "react";
import styled from "styled-components";
import ProductIndexItem from "./ProductIndexItem";

// Styled Components
const StyledIndexItemsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px 60px;
  justify-content: center;
`;

// ProductIndex Component
const ProductIndex = (props) => {
  const { products } = props;
  return(
    <div>
      <StyledIndexItemsWrapper>
        {products.map(product => <ProductIndexItem key={product.id} product={product} />)}
      </StyledIndexItemsWrapper>
    </div>
  )
};

export default ProductIndex;
