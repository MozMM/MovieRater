const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const port = process.env.PORT || 5000; //8080

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '.../', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '.../', 'build', 'index.html'));
});

// to ratings routes
app.use('/api', require('./api'))

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(port, function () {
  console.log(`Your server, listening on port ${port}`);
});

module.exports = app;

console.log('hello');