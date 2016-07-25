var express = require('express');
var router = express.Router();

router.get('/:placeid', function(req, res, next) {
  var restaurant = {};
  res.render('restaurant/profile', { restaurant: restaurant });
});

router.post('/:placeid/ignore', function(req, res, next) {
  res.redirect('/');
});

router.post('/:placeid/consider', function(req, res, next) {
  res.redirect('/');
});


module.exports = router;
