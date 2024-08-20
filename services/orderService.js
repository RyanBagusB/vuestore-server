const Order = require('../models/order');

class OrderService {
  static async getOrderByUserId(id) {
    return await Order.aggregate([
      {
        $match: {
          user_id: id,
        },
      },
      {
        $lookup: {
          from: 'products',
          localField: 'cart_items',
          foreignField: 'code',
          as: 'products',
        },
      },
    ]);
  }

  static async createOrder(id, productCode) {
    return await Order.updateOne(
      { user_id: id },
      { $addToSet: { cart_items: productCode } },
      { upsert: true }
    );
  }

  static async deleteOrderByUserId(id, productCode) {
    return await Order.updateOne(
      { user_id: id },
      { $pull: { cart_items: productCode } },
    );
  }
}

module.exports = OrderService;

