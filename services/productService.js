const Product = require('../models/product');

class ProductService {
  static async getAllProducts() {
    return await Product.find({});
  }

  static async getProductByCode(productCode) {
    return await Product.findOne({ code: productCode });
  }
}

module.exports = ProductService;

