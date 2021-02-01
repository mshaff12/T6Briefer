const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var path = require("path");
const db = require("../database");
var expressStaticGzip = require("express-static-gzip");
var request = require("request");

app.get("*.js", function (req, res, next) {
  req.url = req.url + ".gz";
  res.set("Content-Encoding", "gzip");
  next();
});

app.use(expressStaticGzip(path.join(__dirname, "public"), {}));

app.use(
  cors({ origin: "*", preflightContinue: false, optionsSuccessStatus: 204 })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../public")));

app.listen(PORT, function () {
  console.log("listening");
});

app.get("/", function (req, res) {
  res.render("index", {});
});

app.get("/test", function (req, res) {
  res.status(200);
  res.send("its working!");
});

app.get("/https://t6briefer.com/getWeatherDataKNSE", function (req, res) {
  res.status(200);
  request(
    {
      url: "https://avwx.rest/api/metar/KNSE?",
      headers: {
        Authorization: "f_ZqboPvOWAZoxfDXp5bNlMp50jhJzKMk2KiYI9NVU0",
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get("/https://t6briefer.com/getWeatherDataKNGP", function (req, res) {
  res.status(200);
  request(
    {
      url: "https://avwx.rest/api/metar/KNGP?",
      headers: {
        Authorization: "f_ZqboPvOWAZoxfDXp5bNlMp50jhJzKMk2KiYI9NVU0",
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});
