var express = require('express');
var newrelic = require('newrelic');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();
app.use(bodyParser());
// var transporter = nodemailer.createTransport();
var transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: 'postmaster@vishalnama.com',
        pass: 'f0f9fa597f56431e17e7529822026492'
    }
});

app.use(express.static(__dirname + "/public"));

app.get('/available', function (req, res) {
	res.end("YES");
});

app.post("/contact", function (req, res) {
	var body = req.body;
	
	transporter.sendMail({
	    from: [{name: body.firstName, address: body.email}],
	    to: 'hello@vishalnama.com',
	    subject: body.subject,
	    html: '<h2>' + body.firstName + ' ' + body.lastName + '</h2><br><p>' + body.email + '</p><p>' + body.message + '</p>' 
	}, function (err, resp) {
		console.log(err, resp);
		if(resp) {
			console.log("Mail Sent!!!");
		}
		res.redirect("/");
	});
});

app.listen(process.env.PORT || 8888);
