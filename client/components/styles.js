// STYLED COMPONENTS
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';

// Home
const StyledSplash = styled.div`
  background-image: url('https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

const StyledProductIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  border-bottom: solid #b7aba4 1px;
  padding: 100px;
`;

const StyledProductsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 217px;
  background-color: rgb(245, 219, 139);
  color: black;
  border: solid rgb(245, 219, 139) 1px;
  margin: 50px;
  &:hover {
    color: rgb(245, 219, 139);
    background-color: white;
  }
`;

// Navbar
const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 100%;
  padding: 24px 50px;
  border-bottom: solid #cdc5c4 1px;
  color: #292819;
  opacity: 1;
  &:hover {
    color: #ffffff;
    a:not(:hover) {
      color: white;
    }
    background-color: #b48139;
    transition: background 0.5s ease-in-out, box-shadow 0.3s ease-in-out;
  }
`;

const StyledNavHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLeftHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: flex-start;
`;

const StyledRightHeader = styled(StyledLeftHeader)`
  justify-content: flex-end;
`;

const StyledLogoHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
`;

const StyledLogoLink = styled(Link)`
  font-size: 2.5vw;
  font-weight: 300px;
  color: #a39c62;
  &:hover {
    color: #a2aab1;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: #a2aab1;
  }
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledNavHeaderBottom = styled(StyledNavHeader)`
  padding: 0px 30%;
  align-items: flex-end;
`;

// ProductIndexItem
const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 360px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transform: perspective(1px) translateZ(0);
  transition-property: box-shadow, transform;
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 0 10px 10px -10px rgb(0 0 0 / 50%);
    transform: scale(1.1);
  }
`;

const StyledItemImage = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
`;

const StyledProductName = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
`;

// AdminProducts AdminUsers
const StyledButton = styled(Button)`
  justify-content: center;
  color: black;
  background-color: white;
  border: solid #d9d9d9; 1px;
  margin-bottom: 20px;
  &:hover {
    color: #f5db8b;
    border: solid #f5db8b 1px;
  }
`;

const StyledTable = styled(Table)`
  .ant-pagination-item-active {
    border-color: #b5963e;
  }
  .ant-pagination-item-active a {
    color: #b5963e;
  }
  a:hover {
    color: #b5963e;
  }
  .ant-pagination-item:hover {
    border-color: #b5963e;
  }
  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    color: #b5963e;
    border-color: #b5963e;
  }
`;

// Register and Signup forms
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 3em;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80');
  background-size: cover;
  background-position: center;
`;

const StyledFormBox = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid #b48139;
  background-color: #ebe8eb;
`;

// Cart
const StyledCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 100px 200px;
`;

const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid #cdc5c4 0.5px;
`;

const StyledEmptyCart = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0px;
  border-bottom: solid #cdc5c4 0.5px;
  height: 150px;
  font-size: 18px;
  font-weight: 800;
`;

const StyledTotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  padding: 0px 10px;
  font-size: 16px;
  font-weight: 600;
`;

const StyledCheckoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 217px;
  background-color: rgb(245, 219, 139);
  color: black;
  border: solid rgb(245, 219, 139) 1px;
  margin: 50px;
  &:hover {
    color: rgb(245, 219, 139);
    background-color: white;
  }
  align-self: flex-end;
  margin-right: 0px;
  margin-top: 30px;
`;

// CartProduct
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

const StyledCartProductName = styled.div`
  display: flex;
  width: 30%;
  font-size: 15px;
  font-weight: 800;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 30px;
  a {
    color: black;
  }
  a:hover {
    color: #b5963e;
  }
`;

const StyledProductPrice = styled(StyledProductName)`
  width: 20%;
  padding: 0px 30px;
  justify-content: center;
  padding: 0px 30px;
  align-items: center;
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
  background-color: white;
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
  align-self: center;
  &:hover {
    color: #a2aab1;
  }
`;

const StyledDeleteButton = styled(StyledQuantityButton)`
  display: flex;
  width: 5%;
  justify-content: center;
`;

// SingleProduct Page
const StyledProdPage = styled.div`
  background-color: #ebe8eb;
  justify-content: center;
  align-items: center;
`;

const StyledTopWrapper = styled.div`
  display: flex;
  flex-direction: row
  align-items: center;
  gap: 8%;
  justify-content:center;
`;

const StyledSingleProductImg = styled.img`
  width: 450px;
  height: 500px;
  margin: 50px;
  border: 2px solid #a39c62;
  border-radius: 5px;
  background-color: #f2eef2;
`;
const StyledProdInfoWrap = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  margin: 50px;
`;

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ebe8eb;
`;
const StyledName = styled.h1`
  letter-spacing: 1.5;
  margin: 3px;
`;
const StyledDescription = styled.p`
  align-text: center;
  margin: 3px;
  line-height: 1.8;
  padding-bottom: 8%;
  flex-basis: auto;
  width: 75%;
`;

const StyledPrice = styled.h3`
  align-text: center;
  margin: 5px;
  align-items: center;
`;

const StyledAddToCartBtn = styled.button`
  width: 75%;
  margin: 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  background-color: #f5db8b;
  color: #303030;
  border: solid rgb(245, 219, 139) 1px;
  cursor: pointer;

  &:hover {
    color: rgb(245, 219, 139);
    background-color: white;
  }
`;

const StyledProductQuantityForm = styled(StyledQuantityForm)`
  padding: 0px;
`;

//Order Confirmation
const StyledConfirmationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 5px solid #ffffff;
  padding: 20px 25px 25px 20px;
  color: #ffffff;
  height: 400px;
  width: 400px;
  overflow: auto;
  font-family: "Nunito", sans-serif;
  text-align: center;
  font-size: 180%;
  background-color:rgba(193, 125, 31, 0.8);
`;

const StyledShoppingButton = styled(Button)`
  background-color:rgba(193, 125, 31, 0.8);
  border: 3px solid #ffffff;
  color: #ffffff;
`;

// Exports
export {
  // Home
  StyledSplash,
  StyledProductIndexWrapper,
  StyledProductsLink,
  //Navbar
  StyledNavbar,
  StyledNavHeader,
  StyledLeftHeader,
  StyledRightHeader,
  StyledLogoHeader,
  StyledLogoLink,
  StyledLink,
  StyledLinksWrapper,
  StyledNavHeaderBottom,
  // ProductIndexItem
  StyledItemWrapper,
  StyledItemImage,
  StyledProductName,
  // AdminProducts AdminUsers
  StyledButton,
  StyledTable,
  // Register Login
  StyledWrapper,
  StyledFormBox,
  // Cart
  StyledCartWrapper,
  StyledCart,
  StyledEmptyCart,
  StyledTotalPrice,
  StyledCheckoutButton,
  // CartProduct
  StyledCartRow,
  StyledProductImage,
  StyledCartProductName,
  StyledProductPrice,
  StyledQuantityForm,
  StyledProductQuantity,
  StyledQuantityInput,
  StyledQuantityButton,
  StyledDeleteButton,
  // SingleProduct
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
  //OrderConfirmation
  StyledConfirmationBox,
  StyledShoppingButton
};
