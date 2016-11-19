var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(__dirname + '../public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(process.env.PORT || 3000);
// var http = require('http');
// var Router = require('node-router');
 
// var router = Router();    // create a new Router instance 
// var express = require('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
// var mysql      = require('mysql');

// var app = express();

// app.use(methodOverride('_method'));
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
// 	defaultLayout: 'main'
// }));

// app.set('view engine', 'handlebars');

// var routes = require('./controllers/burgers_controller.js');
// app.use('/', routes);

// var port = 3000;
// app.listen(port);


