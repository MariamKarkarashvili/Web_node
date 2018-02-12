var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.use(bodyParser.json());
/* GET home page. */

router.get('/', function(req, res, next) {
  console.log(req.query);
  res.render('admin', {qs : req.query});
});

router.post('/', urlencodedParser, function(req, res, next){
  console.log(req.body);
  global.data.texte = req.body.texte;

  res.redirect('/')

})


module.exports = router;
