var express = require('express');
var router = express.Router();

router.get('/:placeid', function(req, res, next) {
  var restaurant = {};
  res.render('restaurant/profile', { restaurant: restaurant });
});

module.exports = router;
