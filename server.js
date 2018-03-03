const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));

const port = process.env.PORT || 3000; //process.env.PORT allows the app to work with Heroku

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at port: ', port);
});