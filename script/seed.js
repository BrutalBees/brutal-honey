'use strict'

const {db, models: {User, Product} } = require('../server/db');
const Cart = require('../server/db/models/Cart');
const { faker } = require('@faker-js/faker');

async function seed() {
  await db.sync({ force: true })
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
      password: '123',
      isAdmin: true
    },
    {
      email: 'angel@gmail.com',
      firstName: 'Angel',
      lastName:'Shopper',
      password: '123',
      isAdmin: true
    },
    {
      email: 'katie@gmail.com',
      firstName: 'Katie',
      lastName:'Shopper',
      password: '123',
      isAdmin: true
    }
  ];

  const fakerUsers = [...Array(20)].map(fakeUser => (
    {
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password()
    }
  ));

  const [grace, jia, angel, katie] = await Promise.all(users.map(user => User.create(user)));

  await Promise.all(fakerUsers.map(user => User.create(user)));

  // Creating Products
  const products = [
    {
      productName: "Beekeeper's Naturals",
      price: 16,
      description: "Go raw or go home. Beekeeper\'s Naturals raw wildflower honey is a pure, all-natural, and healthy. Our raw wildflower honey comes from sustainable, local apiaries in Ontario, Canada and it\'s truly farm to bottle.",
      category: "Raw",
      imageUrl: ["https://img.thrivemarket.com/store/full/6/2/628055142058-1_1_1.jpg"]
    },
    {
      productName: "Thrive Market",
      price: 8,
      description: "Made from nectar collected from wildflower fields spanning Mexico and Argentina and ethically sourced from the hive, our Organic Raw Wildflower Honey is never pasteurized or filtered.",
      category: "Raw",
      imageUrl: ["https://img.thrivemarket.com/store/full/6/7/671635708137-1_1_1.jpg"]
    },
    {
      productName: "Bloom Honey",
      price: 10,
      description: "Turmeric delicately blended with Bloom\'s Orange Blossom honey - Use this tasty “creamed honey” combo in tea to support overall health & wellness",
      category: "Raw",
      imageUrl: ["https://img.thrivemarket.com/store/full/8/5/855990004640-1.jpg"]
    },
    {
      productName: "Kythnos Cyclades",
      price: 20,
      description: "“Stories of Greek Origins” Organic Thyme Honey from Kythnos Cyclades, is a distinguished honey with exceptional aroma and flavor , vivid golden color and taste of the highest quality.  It is surely an ultra premium, special gift of nature.",
      category: "Organic",
      imageUrl: ["http://storiesofgreekorigins.com/image/cache/data/Organic-Thyme-Honey_photo_2-455x475.jpg"]
    },
    {
      productName: "Local Hive",
      price: 20,
      description: "Made in the USA and straight from the hive - from our family to your family! Rice`s Honey proudly partners with local beekeepers around the country to provide only 100% pure, authentic, high quality, raw & unfiltered honey in a wide variety of local blends.",
      category: "Raw",
      imageUrl: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1576171343-lr-rice-southeast-honey-1576171328.jpg?crop=1xw:1xh;center,top&resize=768:*"]
    },
    {
      productName: "Nature Nate\'s",
      price: 10,
      description: "Nature Nate's 100% Pure, Raw & Unfiltered Honey is a sweetener as nature intended. One ingredient: Honey. All we add is the bottle",
      category: "Organic",
      imageUrl: ["https://images-na.ssl-images-amazon.com/images/I/41euxoYwTIL._SX300_SY300_QL70_FMwebp_.jpg"]
    },
    {
      productName: "Organic Tattva",
      price: 20,
      description: "Organic Tattva\'s Organic Honey is a source of calcium, iron and protein. Along with these, Organic Honey also potassium and various other nutrients that your body needs.",
      category: "Organic",
      imageUrl: ["https://www.organictattva.com/wp-content/uploads/2021/04/Organic-Wild-Honey-100gm_Simulation-1-1024x905.png"]
    },
    {
      productName: "Kiva Raw Manuka Honey",
      price: 40,
      description: "Genuine Manuka honey harvested from the remote and pristine hills, forest, and coastal areas of New Zealand",
      category: "Manuka",
      imageUrl: [" https://m.media-amazon.com/images/I/513whGsJxeL._AC_SR480,480_.jpg"]
    },
    {
      productName: "Subee",
      price: 20,
      description: "From hive to Table! Gently filtered to remove hive debris & prevent granulation, our honey is available in packets, squeeze bears, bottles & jars. It's perfect for baking, BBQ, as a sweetener & more!",
      category: "Manuka",
      imageUrl: ["https://cdn.shopify.com/s/files/1/0415/3455/4270/products/003791.jpg?v=1614673437"]
    },
    {
      productName: "ONE Manuka Honey",
      price: 40,
      description: "Pure, Unpasteurized and Cold-Pressed- ONE Manuka Honey is delivered to you just as nature intended. Directly from our family farm to your family table, ONE Manuka Honey undergoes none of the commercial processing commonly associated with large scale corporate brands.",
      category: "Manuka",
      imageUrl: ["https://manukahoneyexperts.com/wp-content/uploads/2020/07/55b44177-21f3-4c6b-9622-53b56c1fd883_1.6f236c6c3c5f9199a33df55ffc5c07bd.jpeg"]
    },
    {
      productName: "Malibu Honey",
      price: 14,
      description: "And like our signature Wildflower honey, we source our Sage honey from bees that forage in the Santa Monica and San Gabriel Mountain ranges. Much of this area is in National Parks and Forests and far from intensive agriculture and all of the pollution and pesticides that come with that.",
      category: "Sage",
      imageUrl: ["https://cdn.shopify.com/s/files/1/0016/6356/5884/products/MalibuHoneySingleWhiteSeemlessSage_1024x1024.png?v=1633238832"]
    },
    {
      productName: "Asheville Bee Charmer",
      price: 18,
      description: "Our Sage Honey comes from the nectar of the clary sage plant (salvia sclarea). This pure, unfiltered honey hails from the Umpqua basin in Western Oregon, not too far from the city of Yoncalla.",
      category: "Sage",
      imageUrl: ["https://ashevillebeecharmer.com/wp-content/uploads/2017/10/ABC_HONEY_Sage_16oz.jpg"]
    },
    {
      productName: "Sandt\'s Honey Co",
      price: 9,
      description: "Sage honey can come from many different species of the sage plant. Sage shrubs usually grow along the California coast and in the Sierra Nevada Mountains. Sage honey has a mild, delicate flavor. It is generally white or water-white in color..",
      category: "Sage",
      imageUrl: ["https://cdn.shopify.com/s/files/1/2777/4662/products/Honey_Sage_1_lb_1000x.jpg?v=1554839298"]
    }
  ];
  const createdProducts = await Promise.all(products.map(product => Product.create(product)));

  // Create Carts
  const [cart1, cart2, cart3, cart4 ] = await Cart.bulkCreate([ {}, {}, {}, { isOrder: true } ]);

  // Set associations between users and carts
  await cart1.setUser(katie);
  await cart2.setUser(jia);
  await cart3.setUser(angel);
  await cart4.setUser(angel);

  // Set Cart-Product Associations
  await cart1.setProducts([ createdProducts[0], createdProducts[1], createdProducts[2]], {
    through: { quantity: 3 }
  });

  await cart3.setProducts([ createdProducts[0], createdProducts[2], createdProducts[4], createdProducts[6]], {
    through: { quantity: 2 }
  });

  await cart4.setProducts([ createdProducts[1], createdProducts[3], createdProducts[5], createdProducts[7] ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

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

if (module === require.main) {
  runSeed()
}

module.exports = seed;
