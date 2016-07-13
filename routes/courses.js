var express = require('express');
var router = express.Router();

var Course = require('../models/Course.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Course.find(function(err, docs){
    res.render('courses/index', { courses:  docs });
  });
});

router.post('/', function(req, res, next) {
  var course = new Course({
    name: req.body.name
  });
  course.save(function(err){
    if (err) res.send('error ' + err);
    else res.redirect('/courses');
  })
});

module.exports = router;
