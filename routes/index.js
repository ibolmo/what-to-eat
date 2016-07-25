var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'What to eat' });
});

router.post('/gps', function(req, res,next) {
  res.redirect('/nearby');
});

router.get('/nearby', function(req, res,next) {
  var restaurants = [];

  res.render('nearby', {
    title: 'Restaurants open nearby',
    restaurants: restaurants
  });
});

router.get('/choose', function(req, res,next) {
  var restaurants = [];

  res.render('choose', {
    title: 'Choose a final restaurant',
    restaurants: restaurants
  });
});

router.post('/choose/:placeid', function(req, res,next) {
  var restaurant = { placeid: 'temporary' };
  res.redirect('/restaurant/' + restaurant.placeid);
});

module.exports = router;
