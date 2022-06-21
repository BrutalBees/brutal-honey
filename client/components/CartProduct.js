import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/cart";
import styled from "styled-components";
import { DeleteOutlined } from '@ant-design/icons';


// Styled Components
const StyledCartRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 20px;
  border-bottom: solid #cdc5c4 0.5px;
  height: 150px;
`;

const StyledProductImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 10%;
`;

const StyledProductName = styled.div`
  display: flex;
  width: 30%;
  font-size: 15px;
  font-weight: 800;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 30px;
`;

const StyledProductPrice = styled(StyledProductName)`
  width: 20%;
  padding: 0px 30px;
  justify-content: center;
  padding: 0px 30px;
`;

const StyledQuantityForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 0px 40px;
  justify-content: center;
  align-items: center;
`;

const StyledProductQuantity = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 40px;
  border: solid grey 0.5px;
`;

const StyledQuantityInput = styled.input`
  display: flex;
  border: none;
  padding: 0;
  background-color: white;
  margin: 0;
  width: 50px;
  text-align: center;
  &:hover {
    color: #f5db8b;
  }
`;

const StyledQuantityButton = styled.button`
  display: flex;
  border: none;
  background-color: white;
  margin: 0;
  align-items: center;
  &:hover {
    color: #a2aab1;
  }
`;

const StyledDeleteButton = styled(StyledQuantityButton)`
  display: flex;
  width: 5%;
  justify-content: center;
`;


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

  return (
    <StyledCartRow key={product.id}>
      <StyledProductImage image={product.imageUrl[0]}></StyledProductImage>
      <StyledProductName>{product.productName}</StyledProductName>
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
      <StyledDeleteButton><DeleteOutlined /></StyledDeleteButton>
    </StyledCartRow>
  )
};

export default CartProduct;
