import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../store/cart";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const productsInCart = cart.products;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch]);
  return(
    <div>THIS IS THE SHOPPING CART
      {productsInCart && productsInCart.map(product =>
        <div key={product.id} style={{ display: "flex", flexDirection:"column" }}>
          <div>NAME: {product.productName}</div>
          <div>PRICE: {product.price}</div>
          <div style={{ width: 100, height: 100 }}>
            <img src={product.imageUrl[0]} style={{ maxWidth:"100%", maxHeight:"100%"}}></img>
          </div>
          <div>QUANTITY: {product.cartProduct.quantity}</div>
          <br />
      </div>
      )}
    </div>
  )
};

export default Cart;
