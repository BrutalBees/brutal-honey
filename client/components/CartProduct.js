import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { updateCart, removeProductFromCart } from "../store/cart";
import { DeleteOutlined } from '@ant-design/icons';
import {
  StyledCartRow,
  StyledProductImage,
  StyledCartProductName,
  StyledProductPrice,
  StyledQuantityForm,
  StyledProductQuantity,
  StyledQuantityInput,
  StyledQuantityButton,
  StyledDeleteButton
} from './styles';

// CartProduct Component
const CartProduct = (props) => {
  const { product } = props;
  const initialQty = product.cartProduct.quantity;
  const [ quantity, setQuantity ] = useState(initialQty);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    evt.preventDefault();
    setQuantity(evt.target.value);
  };

  const handleQtyChange = (evt) => {
    evt.preventDefault();
    evt.target.name === 'minus' && setQuantity(quantity - 1);
    evt.target.name === 'plus' && setQuantity(quantity + 1);
  };

  const handleSubmit = () => {
    const qtyToAdd = quantity - initialQty;
    dispatch(updateCart(product.id, qtyToAdd))
  };

  const handleDelete = () => {
    dispatch(removeProductFromCart(product.id))
  };

  return (
    <StyledCartRow key={product.id}>
        <StyledProductImage image={product.imageUrl[0]}></StyledProductImage>
        <StyledCartProductName>
          <Link to={`/product/${product.id}`}>{product.productName}</Link>
        </StyledCartProductName>
      <StyledProductPrice>${product.price}</StyledProductPrice>
      <StyledQuantityForm>
        <StyledProductQuantity>
          <StyledQuantityButton
            name="minus"
            onClick={handleQtyChange}
          >{"-"}</StyledQuantityButton>
          <StyledQuantityInput
            type="text"
            name={product.id}
            value={quantity}
            onChange={handleChange}
          />
          <StyledQuantityButton
            name="plus"
            onClick={handleQtyChange}
          >{"+"}</StyledQuantityButton>
        </StyledProductQuantity>
        <StyledQuantityInput
            type="submit"
            name="Update"
            value="Update"
            onClick={handleSubmit}
        />
      </StyledQuantityForm>
      <StyledProductPrice>${product.price * product.cartProduct.quantity}</StyledProductPrice>
      <StyledDeleteButton
        onClick={handleDelete}
      ><DeleteOutlined /></StyledDeleteButton>
    </StyledCartRow>
  )
};

export default CartProduct;
