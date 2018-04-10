var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
  product_name: String,
  product_desc: String,
  updated_date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Products', ProductsSchema);