import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../store/cart';
import { fetchSingleProduct } from '../store/singleProduct';
import {
  StyledProductQuantity,
  StyledQuantityButton,
  StyledQuantityInput,
  StyledProdPage,
  StyledTopWrapper,
  StyledSingleProductImg,
  StyledProdInfoWrap,
  StyledProductInfo,
  StyledName,
  StyledDescription,
  StyledPrice,
  StyledAddToCartBtn,
  StyledProductQuantityForm,
} from './styles';

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, [dispatch]);

  const handleChange = (evt) => {
    evt.preventDefault();
    setQuantity(evt.target.value);
  };

  const handleQtyChange = (evt) => {
    evt.preventDefault();
    evt.target.name === 'minus' && setQuantity(quantity - 1);
    evt.target.name === 'plus' && setQuantity(quantity + 1);
  };

  const handleAddToCart = (evt) => {
    dispatch(updateCart(product.id, quantity - 1));
  };

  return (
    <StyledProdPage>
      <StyledTopWrapper>
        <StyledSingleProductImg src={[product.imageUrl]} />
        <StyledProdInfoWrap>
          <StyledProductInfo>
            <StyledName>{product.productName}</StyledName>
            <StyledPrice>${product.price}.95</StyledPrice>

            <hr
              style={{
                color: '#a39c62',
                width: '75%',
              }}
            />

            <StyledDescription>{product.description}</StyledDescription>
            <StyledProductQuantityForm>
              <StyledProductQuantity>
                <StyledQuantityButton name="minus" onClick={handleQtyChange}>
                  {'-'}
                </StyledQuantityButton>
                <StyledQuantityInput
                  type="text"
                  name={product.id}
                  value={quantity}
                  onChange={handleChange}
                />
                <StyledQuantityButton name="plus" onClick={handleQtyChange}>
                  {'+'}
                </StyledQuantityButton>
              </StyledProductQuantity>
            </StyledProductQuantityForm>
            <StyledAddToCartBtn onClick={handleAddToCart}>
              Add to Cart
            </StyledAddToCartBtn>
          </StyledProductInfo>
        </StyledProdInfoWrap>
      </StyledTopWrapper>
    </StyledProdPage>
  );
};

export default SingleProduct;
