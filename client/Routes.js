import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import AdminView from './components/AdminView';
import {me} from './store';

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(me()) }, [dispatch]);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={AllProducts} />
          <Route path="/product/:id" component={SingleProduct} />
          {isAdmin !== false ? <Route path="/admin" component={AdminView} />: ""}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Redirect to="home" />
        </Switch>
      </div>
    );
};

export default Routes;
