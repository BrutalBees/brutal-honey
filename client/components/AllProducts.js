import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchProducts } from "../store/products";
import ProductIndex from "./ProductIndex";

const AllProducts = () => {
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();
  const { search } = useLocation();
  useEffect(() => { dispatch(fetchProducts(search)) }, [dispatch, search]);

  return (
    <div style={{ margin: 100 }}>
      <ProductIndex products={allProducts}/>
    </div>
  )
};

export default AllProducts;
