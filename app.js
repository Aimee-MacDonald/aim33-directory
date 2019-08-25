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
    category: req.body.category,
    speciality: req.body.speciality,
    description: req.body.description,
    hours: req.body.hours,
    number: req.body.number,
    whatsapp: req.body.whatsapp,
    address: req.body.address,
    website: req.body.website,
    image: req.body.image,
    email: req.body.email,
    password: req.body.password,
    rating: "0",
    reviews: []
  });

  newCompany.save(err => {
    if(err) throw err;
    res.redirect("/");
  });
});

app.get("/index", (req, res) => {
  res.status(200).render("index");
});

app.get("/api/getCompany", (req, res) => {
  Company.find({}, (err, docs) => {
    if(err) throw err;
    res.status(200).send(docs);
  });
});

app.listen(process.env.PORT || 8080);
