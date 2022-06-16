import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/products';
import ProductIndex from './ProductIndex';
import {
  StyledSplash,
  StyledProductIndexWrapper,
  StyledProductsLink,
} from './styles';

export const Home = () => {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <StyledSplash />
      <StyledProductIndexWrapper>
        <ProductIndex products={allProducts.slice(0, 4)} />
        <StyledProductsLink to="/products">
          VIEW ALL PRODUCTS
        </StyledProductsLink>
      </StyledProductIndexWrapper>
    </div>
  );
};

export default Home;
