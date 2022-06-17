const router = require('express').Router();
const { reset } = require('nodemon');
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
    // const user = await User.findByToken(req.headers.authorization);
    // const product = await Product.findByPk(req.body.id) // finds the product by the id
    const token = req.headers.authorization;
    if (token) {
      const user = await User.findByToken(req.headers.authorization);
      const userCart = await Cart.findOne({
        where: {
          userId: user.id
        }
      });
      await userCart.addProduct(req.body.productId);
      res.send(await userCart.reload());
    } else { // guest cart
      const guestCart = await Cart.create();
      await guestCart.addProduct(req.body.productId);
      res.send(await guestCart.reload());
    }
    // const [cart, created] = await Cart.findOrCreate({
    //   where: {
    //     userId: user.id
    //   },
    //   include: [Product, User]
    // });
    // await cart.addProduct(req.body.productId);
    // res.send(await cart.reload());
    // res.send(cart);
  } catch (error) {
    next(error)
  }
});
