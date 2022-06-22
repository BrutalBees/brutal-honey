const router = require('express').Router();
const verifyToken = require('../auth/verifyToken');
const { models: { Cart, Product, cartProduct } } = require('../db');
module.exports = router;

router.get('/', verifyToken, async (req, res, next) => {
  try {
    const [ userCart, created ] = await Cart.findOrCreate({
      where: {
        userId: req.user.id,
        isOrder: false
      },
      include: [ Product ]
    });
    res.send(userCart);
  } catch (error) {
    next(error);
  }
});

router.post('/', verifyToken, async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id,
        isOrder: false
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

router.delete('/:productId', verifyToken, async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id,
        isOrder: false
      },
      include: [ Product ]
    });
    await userCart.removeProduct(req.params.productId)
    res.send(await userCart.reload());
  } catch (error) {
    next(error);
  }
});

router.get('/checkout', verifyToken, async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id,
        isOrder: false
      },
      include: [ Product ]
    });
    userCart.isOrder = true;
    res.send(await userCart.save());
  } catch (error) {
    next(error);
  }
});
