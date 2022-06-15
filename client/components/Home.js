import React from 'react';
import { useSelector } from 'react-redux';
import ProductIndex from './ProductIndex';

// COMPONENT
export const Home = props => {
  const username = useSelector(state => state.auth.firstName);

  return (
    <div>
      {/* <h3>Welcome, {username}</h3> */}
      <ProductIndex />
    </div>
  )
}

export default Home;
