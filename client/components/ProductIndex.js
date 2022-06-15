import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchProducts } from "../store/products";
import ProductIndexItem from "./ProductIndexItem";

// STYLED COMPONENT
const StyledProductIndexWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border-bottom: solid #b7aba4 1px;
  padding: 100px;
`;

const StyledIndexItemsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px 60px;
  justify-content: center;
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
    <StyledProductIndexWrapper>
      <StyledIndexItemsWrapper>
        {products.map(product => <ProductIndexItem key={product.id} product={product} />)}
      </StyledIndexItemsWrapper>
    </StyledProductIndexWrapper>
  )
};

export default ProductIndex;
