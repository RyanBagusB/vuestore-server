const OrderService = require('../services/orderService');

class OrderController {
  static async getOrderByUserId(req, res) {
    try {
      const id = Number(req.params.id);
      const order = await OrderService.getOrderByUserId(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createOrder(req, res) {
    try {
      const id = Number(req.params.id);
      const productCode = String(req.body.product);
      const newOrder = await OrderService.createOrder(id, productCode);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteOrderByUserId(req, res) {
    try {
      const id = Number(req.params.id);
      const productCode = String(req.params.productCode);
      await OrderService.deleteOrderByUserId(id, productCode);
      res.status(200).json({ message: 'Order successfully deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrderController;

