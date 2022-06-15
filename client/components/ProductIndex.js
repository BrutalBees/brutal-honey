import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/products";
import ProductIndexItem from "./ProductIndexItem";

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
    <div>
      {products.map(product => <ProductIndexItem key={product.id} product={product} />)}
    </div>
  )
};

export default ProductIndex;
