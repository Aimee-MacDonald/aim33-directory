const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Company = require(path.join(__dirname, "/dbmodels/company"));

mongoose.connect(process.env.ADMINDB, {useNewUrlParser: true});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/static")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.redirect("/survey");
});

app.get("/survey", (req, res) => {
  res.status(200).render("survey");
});

app.post("/survey", (req, res) => {
  var newCompany = new Company({
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
    hours: req.body.hours,
    number: req.body.number,
    whatsapp: req.body.whatsapp,
    website: req.body.website,
    email: req.body.email
  });

  newCompany.save(err => {
    if(err) throw err;
    res.redirect("/");
  });
});

app.get("/index", (req, res) => {
  res.status(200).render("index");
});

app.listen(process.env.PORT || 8080);
