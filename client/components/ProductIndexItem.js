import React from "react";
import { StyledItemWrapper, StyledItemImage, StyledProductName } from "./styles";

// ProductIndexItem Component
const ProductIndexItem = (props) => {
  const { product } = props;
  return (
    <StyledItemWrapper>
      <StyledItemImage image={product.imageUrl[0]} />
      <StyledProductName>
        {product.productName.toUpperCase()}
      </StyledProductName>
    </StyledItemWrapper>
  )
};

export default ProductIndexItem;
