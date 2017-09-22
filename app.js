var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
// var makesRouter = require('./routes');
var fs = require('fs');
var bodyParser = require('body-parser');

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(express.static('public'));