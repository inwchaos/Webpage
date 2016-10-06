var fs = require('fs');
var current_file = 'Places_Visited.json';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));

app.use('/', routes);
app.use('/users', users);

app.post('/submit', function(req, res){
  var current_p =  JSON.stringify(req.body.current_place);
  var lang_n = JSON.stringify(req.body.longitude_new);
  var long_n = JSON.stringify(req.body.latitude_new);
  var json_data = '[' + current_p + ', ' + long_n + ', ' + lang_n + ']'
  var json_data_1 = ',[' + current_p + ', ' + long_n + ', ' + lang_n + ']'

  if(req.body.current_place == "" || req.body.longitude_new == "" || req.body.latitude_new == "")
    res.redirect('/error');
  else
  {
    fs.exists(current_file, function(exists) {
      if (exists) {
        fs.appendFile(current_file, json_data_1);
        fs.readFile(current_file, 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
          var new_file = "var locations = [" + data + "];";
          fs.writeFile('./public/Location.js', new_file);
        });
      }
      else
        fs.writeFile(current_file, json_data);
        fs.readFile(current_file, 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
          var new_file = "var locations = [" + data + "];";
          fs.writeFile('./public/Location.js', new_file);
        });
    });

    res.redirect('/redirect');
  }
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
app.use(function(req, res, next) {
  res.sendFile(__dirname + '/404.html');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
