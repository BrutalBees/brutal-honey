import React, {useCallback} from 'react';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
// const Navbar = ({handleClick, isLoggedIn}) => {
  const name = useSelector(state => state.auth.firstName);
  const isLoggedIn = useSelector(state => !!state.auth.id);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => dispatch(logout()));

  return (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <span>Welcome, {name}</span>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
  )
}
export default Navbar;

// REFACTORED USING REACT-REDUX HOOKS
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.auth.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)
