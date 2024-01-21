var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.get('/', function(req, res, next) {
  // Assuming your HTML file is named 'foodblog.html'
  var filePath = path.join(__dirname, '../public/foodblog.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }

    res.send(data);
  });
});

module.exports = router;
