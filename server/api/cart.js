const router = require('express').Router();
const { models: { Cart, User, Product } } = require('../db');
module.exports = router;


// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll()
    res.json(cart)
  } 
  catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    const cart = await Cart.findOrCreate({
     where: {
       userId: user.id
     },
     include: {
      model: Product,
      model: User
  }
    })
    res.json(cart)
  } catch (error) {
    next(error)
  }
});