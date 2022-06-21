const router = require('express').Router();
const { reset } = require('nodemon');
const verifyToken = require('../auth/verifyToken');
const { models: { Cart, Product, cartProduct } } = require('../db');
module.exports = router;

// GET /api/cart - returns the cart and products associated with the token, creates new cart if none
router.get('/', verifyToken, async (req, res, next) => {
  try {
    const [ userCart, created ] = await Cart.findOrCreate({
      where: {
        userId: req.user.id
      },
      include: [ Product ]
    });
    res.send(userCart);
  } catch (error) {
    next(error);
  }
});

// POST /api/cart - adds given quantity of products to associated user cart
// req.body: { "productId": 7, "quantity": 4 }
router.post('/', verifyToken, async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
      },
      include: [ Product ]
    });
    await userCart.addProduct(req.body.productId);
    await cartProduct.increment({
      quantity: req.body.quantity }, {
        where: {
          productId: req.body.productId
    }});
    res.send(await userCart.reload());
  } catch (error) {
    next(error);
  }
});

// DELETE /api/cart - removes product from cart
router.delete('/:productId', verifyToken, async (req, res, next) => {
  try {
    debugger
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
      },
      include: [ Product ]
    });
    await userCart.removeProduct(req.params.productId)
    res.send(await userCart.reload());
    res.send(req.data)
  } catch (error) {
    next(error);
  }
});
