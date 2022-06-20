const router = require('express').Router();
const verifyToken = require('../auth/verifyToken');
const { models: { Cart, Product } } = require('../db');
module.exports = router;

// GET /api/cart - returns the cart and products associated with the token, creates new cart if none
router.get('/', verifyToken, async (req, res, next) => {
  try {
    const userCart = await Cart.findOrCreate({
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
