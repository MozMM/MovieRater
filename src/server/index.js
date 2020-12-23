const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const db = require('../server/db')
const port = process.env.PORT || 5000; 

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '.../', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.sendFile(path.resolve("build/index.html"))
  //res.sendFile(path.join(__dirname, 'index.html'));
  //res.sendFile('index.html');
  //console.log('path is =>>', path.join(__dirname, '.../', 'build', 'index.html'));
});

// to ratings routes
app.use('/api', require('./api'))

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync()  // sync our database
  .then(function(){
    app.listen(port, function () {
      if (process.env.NODE_ENV !== 'test') {
      console.log(`Hello YearOne Folks. Your server is listening on port ${port}`);
      }
    });
})

module.exports = app;
