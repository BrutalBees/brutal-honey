import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/products";
import ProductIndex from "./ProductIndex";

const AllProducts = () => {
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div>
      <ProductIndex products={allProducts}/>
    </div>
  )
};

export default AllProducts;
