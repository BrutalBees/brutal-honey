import { useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {
    console.log(props)
     const dispatch = useDispatch();
     const cart = useSelector((state) => state.cart);
    return (
        <div className="cart-container">
            <div className="cart-product-container">
                {cart.map((product => (
                    <div key={product.id}>
        
                    </div>
        )))}
            </div>
        </div>  
        );
};

export default Cart;