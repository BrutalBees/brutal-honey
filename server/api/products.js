// API/PRODUCTS ROUTES
const router = require('express').Router();
const { NoStyleItemContext } = require('antd/lib/form/context');
const req = require('express/lib/request');
const verifyToken = require('../auth/verifyToken');
const { models: { Product }} = require('../db');
module.exports = router;

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: req.query,
    });
    res.send(products);
  } catch (error) {
    next(error);
  }
});

// POST /api/products - admin can create new product
router.post('/', verifyToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      res.send(await Product.create(req.body));
    } else {
      res.status(401).send('User does not have admin access');
    }
  } catch (error) {
    next(error)
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// PUT /api/products/:id - Admin can edit a product
router.put('/:id', verifyToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const product = await Product.findByPk(req.params.id);
      await product.set(req.body);
      res.send(await product.save());
    } else {
      res.status(401).send('User does not have admin access');
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /api/products/:id - Admin can delete a product
router.delete('/:id', verifyToken, async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      await Product.destroy({where: {id: req.params.id}});
      res.sendStatus(204);
    } else {
      res.status(401).send('User does not have admin access');
    }
  } catch (error) {
    next(error);
  }
});
