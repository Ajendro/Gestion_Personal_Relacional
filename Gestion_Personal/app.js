var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const conexion = require('./conexion/conexion');



const categoryRoutes = require('./routes/categoryRoute');
const UserRoute = require('./routes/userRoute');
const notificationsRoute = require('./routes/notificationsRoute');
const Personal_FinanceRoute = require('./routes/personal_FinanceRoute');
const taskRoute = require('./routes/tasksRoute');
const Authentication_methods = require('./routes/authentication_methodsRoute');
const Bank_accounts = require('./routes/bank_accountsRoute');
const Integration = require('./routes/integrationRoute');
const Personal_objetives = require('./routes/personal_objetivesRoute');
const Health = require('./routes/healthRoute');
const Quote = require('./routes/quotesRoute');
const financial_goals = require('./routes/financial_goalsRoute');
const autenticación = require('./routes/authenticationRoute');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/apiCategory', categoryRoutes);
app.use('/apiUser', UserRoute);
app.use('/api', notificationsRoute);
app.use('/api', Personal_FinanceRoute);
app.use('/api', taskRoute);
app.use('/api', Authentication_methods);
app.use('/api', Bank_accounts);
app.use('/api',Integration);
app.use('/api', Personal_objetives);
app.use('/api', Health);
app.use('/api', Quote);
app.use('/api', financial_goals);
app.use('/api', autenticación);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
