const router = require('express').Router();
const verifyToken = require('../auth/verifyToken');
const { models: { Product }} = require('../db');
module.exports = router;

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

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

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
