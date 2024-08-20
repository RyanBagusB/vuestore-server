const ProductService = require('../services/productService');

class ProductController {
  static async getAllProducts(_, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getProductByCode(req, res) {
    try {
      const productCode = req.params.code;
      const product = await ProductService.getProductByCode(productCode);
      res.status(200).json(product);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductController;

