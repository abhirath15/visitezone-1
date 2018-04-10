var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Products = require('../models/Products.js');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Products.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});



module.exports = router;