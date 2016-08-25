var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Site' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'My Site' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'My Site' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'My Site' });
});

module.exports = router;
