const mongoose = require('mongoose');
const Product = require('./models/product');
const Order = require('./models/order');
const productsData = require('./data/productsData');
const ordersData = require('./data/ordersData');
const dotenv = require('dotenv');

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Product.deleteMany();
    await Order.deleteMany();

    await Product.create(productsData);
    await Order.create(ordersData);

    await Order.aggregate([
    {
      $lookup:
        {
          from: "products",
          localField: "cart_items",
          foreignField: "code",
          as: "products"
        }
   }
 ])

    console.log('Seed completed');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();

