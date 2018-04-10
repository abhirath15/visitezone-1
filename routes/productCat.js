var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ProductCat = require('../models/ProductCat.js');



router.get('/', function(req, res, next) {
  ProductCat.find(function (err, productCat) {
    if (err) return next(err);
    res.json(productCat);
  });
});



router.get('/:id', function(req, res, next) {
  ProductCat.find({"cat_belong_to_product": req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;