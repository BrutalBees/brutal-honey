import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import AdminView from './components/AdminView';
import Signup from './components/SignUp';
import Login from './components/Login';

import { me } from './store';

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/products" component={AllProducts} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        {isAdmin !== false ? <Route path="/admin" component={AdminView} /> : ''}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to="home" />
      </Switch>
    </div>
  );
};

export default Routes;
