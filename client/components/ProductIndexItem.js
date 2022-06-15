import React from "react";

const ProductIndexItem = (props) => {
  const { product } = props;
  return (
    <div>{product.productName}</div>
  )
};

export default ProductIndexItem;
