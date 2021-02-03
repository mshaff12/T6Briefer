const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var path = require("path");
const db = require("../database");
var expressStaticGzip = require("express-static-gzip");
var request = require("request");

app.use(expressStaticGzip(path.join(__dirname, "dist"), {}));

// app.get("/icons", express.static(path.join(__dirname, "icons")));

app.use(
  cors({ origin: "*", preflightContinue: false, optionsSuccessStatus: 204 })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../public/dist")));

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});

// app.get("http://localhost:3000/", function (req, res) {
//   res.status(200);
//   res.sendFile(path.join(__dirname, "/../public", "manifest.json"));
// });

app.get("/", function (req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "public", "manifest.json"));
});

app.get("https://www.t6briefer.com/", function (req, res) {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "public", "manifest.json"));
});

app.get("/manifest.json", function (req, res) {
  res.sendFile(path.join(__dirname, "/../public", "manifest.json"));
});

app.get("/icons/manifest-icon-192.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/../icons", "manifest-icon-192.png"));
});

app.get("/icons/manifest-icon-512.png", (req, res) => {
  res.sendFile(path.join(__dirname, "/../icons", "manifest-icon-512.png"));
});

app.get("/service-worker.js", (req, res) => {
  // response.writeHead(200, {
  //   "Service-Worker-Allowed": "/",
  //   "Content-Type": "application/javascript",
  // });
  // res.sendFile(path.resolve(__dirname, "public", "dist", "service-worker.js"));
  res.sendFile(path.resolve(__dirname, "../service-worker.js"));
});

// app.get("*.js", function (req, res, next) {
//   req.url = req.url + ".gz";
//   res.set("Content-Encoding", "gzip");
//   next();
// });

app.get("/", function (req, res) {
  res.render("index", {});
});

app.get("/test", function (req, res) {
  res.status(200);
  res.send("its working!");
});

app.get("/getWeatherDataKNSE", function (req, res) {
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

app.get("/getWeatherDataKNGP", function (req, res) {
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
