var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Supriya Panyala Rajaiahgari' });
});

module.exports = router;
