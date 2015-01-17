var express = require('express');
var newrelic = require('newrelic');
var path = require('path');

var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/available', function (req, res) {
	res.end("YES");
});

app.listen(process.env.PORT || 8888);
