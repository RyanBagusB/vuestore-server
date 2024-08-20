const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  cart_items: [{ type: String, required: true }],
});

module.exports = mongoose.model('Order', orderSchema);

