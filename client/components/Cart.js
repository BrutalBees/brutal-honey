import { useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {
    console.log(props)
     const dispatch = useDispatch();
     const cart = useSelector((state) => state.cart);
    return (
        <div className="cart-container">
            <div>
                {cart.map((product => (
                <div className="cart-product-container">
                    <div className="product-image"></div>
                    <div className="product-name"></div>
                    <div className="produce-price"></div>
                </div>
        )))}
            </div>
        </div>  
        );
};

export default Cart;