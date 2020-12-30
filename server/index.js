const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const db = require('./db')
const port = process.env.PORT || 5000; 

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// to ratings routes
app.use('/api', require('./api'))

// You may need to set an if case for process.env.NODE_DEV which is probably automatic, for local run.

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, '../', 'client/build')));

  app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../', 'client/build', 'index.html'));
  });
};

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
