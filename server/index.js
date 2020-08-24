const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var path = require('path');
const db = require("../database");

app.use(cors({ origin: '*', preflightContinue: false, optionsSuccessStatus: 204 }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/../public')));

app.listen(PORT, function() {
console.log('listening')
});


app.get('/', function (req, res) {
  res.render('index', {});
});

app.get('/test', function (req, res) {
  res.status(200);
  res.send('its working!')
  });


