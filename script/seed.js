'use strict'

const {db, models: {User, Product} } = require('../server/db');
const Cart = require('../server/db/models/Cart');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = [
    {
      email: 'grace@gmail.com',
      firstName: 'Grace',
      lastName:'Shopper',
      password: '123'
    },
    {
      email: 'jia@gmail.com',
      firstName: 'Jia',
      lastName:'Shopper',
      password: '123'
    },
    {
      email: 'angel@gmail.com',
      firstName: 'Angel',
      lastName:'Shopper',
      password: '123'
    },
    {
      email: 'katie@gmail.com',
      firstName: 'Katie',
      lastName:'Shopper',
      password: '123'
    }
  ];

  const [grace, jia, angel, katie] = await Promise.all(users.map(user => User.create(user)));


  // Creating Products
  const products = [
    {
      productName: "Nature Nate\'s 100% Pure, Raw & Unfiltered Honey",
      price: 10,
      description: "",
      category: "organic",
      imageUrl: ["https://images-na.ssl-images-amazon.com/images/I/41euxoYwTIL._SX300_SY300_QL70_FMwebp_.jpg"]
    },
    {
      productName: "Kiva Raw Manuka Honey",
      price: 40,
      description: "",
      category: "organic",
      imageUrl: [" https://m.media-amazon.com/images/I/513whGsJxeL._AC_SR480,480_.jpg"]
    },
    {
      productName: "Subee",
      price: 20,
      description: "",
      category: "manuka",
      imageUrl: ["https://images-na.ssl-images-amazon.com/images/I/41Ob1%2BOxFYL._SX300_SY300_QL70_FMwebp_.jpg"]
    }
  ];
  const [ natures, kiva, subee] = await Promise.all(products.map(product => Product.create(product)));

  // Create Carts
  const carts = [
    {},
    {},
    {}
  ];
  const [cart1, cart2, cart3 ] = await Promise.all(carts.map(cart => Cart.create(cart)));

  // Set associations between users and carts
  await cart1.setUser(grace);
  await cart2.setUser(jia);
  await cart3.setUser(angel);

  // Set Cart-Product Associations
  await cart1.setProducts([ natures, kiva, subee]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}


/*
 We've separated the `seed` function from the `runSeed` function.
This way we can isolate the error handling and exit trapping.
The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;