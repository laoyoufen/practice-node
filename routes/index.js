
var path = require('path');
var express = require('express');
var session = require('express-session');


module.exports = function (app) {
	app.get('/', function(req, res){
		res.redirect('/posts');
	});
	app.use('/signup', require('./signup'));
	app.use('/signin', require('./signin'));
	app.use('/signout', require('./signout'));
	app.use('/posts', require('./posts'));
}


