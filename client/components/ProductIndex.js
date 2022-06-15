import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchProducts } from "../store/products";
import ProductIndexItem from "./ProductIndexItem";

// STYLED COMPONENT
const ProductIndexWrapper = styled.div`
  width: 100%vh;
  height: 50%vh;
  border-bottom: solid #b7aba4 1px;
`;

// FUNCTIONAL COMPONENT
const ProductIndex = () => {
  // UseSelector Hook to access products from redux store
  const products = useSelector(state => state.products);
  // UseDispatch Hook to use dispatch method
  const dispatch = useDispatch();

  // UseEffect Hook to fetchProducts upon component rendering
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);
  return(
    <ProductIndexWrapper>
      {products.map(product => <ProductIndexItem key={product.id} product={product} />)}
    </ProductIndexWrapper>
  )
};

export default ProductIndex;
