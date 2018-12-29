var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var example_router = require('./routes/example_router');
var uploadRouter = require('./routes/upload');
var socketRouter =  require("./routes/socket")
var app = express();
const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/runoob";
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/example',example_router);
app.use('/upload',uploadRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//连接数据库
mongoose.connect(url, { useNewUrlParser: true }, err => {
    if (err) {
      console.error('Failed to connect to database');
    } else {
      console.log('Connecting database successfully');
    }
});

module.exports = app;
