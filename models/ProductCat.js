var mongoose = require('mongoose');

var ProductCatSchema = new mongoose.Schema({
  cat_name: String,
  cat_belong_to_product: String,
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('product_categories', ProductCatSchema);