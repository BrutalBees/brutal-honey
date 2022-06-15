//this is the access point for all things database related!

const db = require('./db');
const Sequelize = require('sequelize');

const User = require('./models/User');
const Product = require('./models/Product');
const Cart = require('./models/Cart');

// Model Associations

// One to One
User.hasOne(Cart);
Cart.belongsTo(User);

// Many to Many
const cartProduct = db.define('cartProduct', {
  quantity: {
    type: Sequelize.INTEGER
  }
});

Cart.belongsToMany(Product, { through: cartProduct });
Product.belongsToMany(Cart, { through: cartProduct });

module.exports = {
  db,
  models: {
    User,
    Product, 
    Cart,
    cartProduct
  },
};
