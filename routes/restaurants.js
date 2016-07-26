var express = require('express');
var router = express.Router();

var Restaurant = require('../models/Restaurant');

router.get('/:placeid', function(req, res, next) {
  Restaurant.findOne({ placeid: req.params.placeid }, function(err, restaurant){
    if (err) return next(err);
    res.render('restaurant/profile', { restaurant: restaurant });
  });
});

module.exports = router;
