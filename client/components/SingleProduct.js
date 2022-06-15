import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';

const picStyle = {
  width: '200px',
};

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(fetchSingleProduct(props.match.params.id));
  }, [dispatch]);
  console.log('PROPS: ', props);
  return (
    <div>
      <div className="left">
        <img src={[product.imageURL]} style={picStyle} />
      </div>
      <div className="right">
        <h2>{product.productName}</h2>
        <h3>{product.price}PRICE HERE</h3>
        <hr />
        <p>{product.description} YUMMMM..... HONEY</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};
export default SingleProduct;

// TODO: style
// TODO: quantity btn?
// TODO: cart btn?
