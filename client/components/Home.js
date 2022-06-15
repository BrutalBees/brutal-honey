import React from 'react';
import { useSelector } from 'react-redux';
import ProductIndex from './ProductIndex';
// import {connect} from 'react-redux';

// COMPONENT
export const Home = props => {
  // const {username} = props;
  // mapState replaced by useSelector
  const username = useSelector(state => state.auth.firstName);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <ProductIndex />
    </div>
  )
}

// CONTAINER

// const mapState = state => {
//   return {
//     username: state.auth.username
//   }
// }

// export default connect(mapState)(Home)
export default Home;
