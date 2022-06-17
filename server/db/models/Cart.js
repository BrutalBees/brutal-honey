const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
    isCheckedOut: false
});

module.exports = Cart