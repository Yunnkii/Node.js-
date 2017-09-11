var express = require('express');
var app = express();
var request = require('supertest');
app.get('/user',function (req,res) {
	res.status(200).json({name: 'safa'});
});

// var server = app.listen(3000,function () {
// 	var port = server.address().port;
// });

// module.exports  = server;

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  });