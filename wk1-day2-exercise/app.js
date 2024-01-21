var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req,res){
    res.send("Hello. This is Express!");
})

app.listen(port, function() {
    console.log('Example app listening on port $(port)!');
})