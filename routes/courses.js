var express = require('express');
var router = express.Router();

var Course = require('../models/Course.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Course.find(function(err, docs){
    res.render('courses/index', { courses:  docs });
  });
});

module.exports = router;
