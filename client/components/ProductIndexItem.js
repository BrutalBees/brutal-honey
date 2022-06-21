import React from "react";
import { Link } from "react-router-dom";
import { StyledItemWrapper, StyledItemImage, StyledProductName } from "./styles";

// ProductIndexItem Component
const ProductIndexItem = (props) => {
  const { product } = props;
  return (
    <Link to={`/product/${product.id}`} style={{ color: "black"}}>
      <StyledItemWrapper>
        <StyledItemImage image={product.imageUrl[0]} />
        <StyledProductName>
          {product.productName.toUpperCase()}
        </StyledProductName>
      </StyledItemWrapper>
    </Link>
  )
};

export default ProductIndexItem;
