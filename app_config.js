var express = require('express');

var bodyParser = require('body-parser');

var app = module.exports = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));


// views is directory for all template files
app.set('views', __dirname + '/views');


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
  next();
});
