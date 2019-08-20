const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/static")));

app.get("/", (req, res) => {
  res.status(200).render("holding");
});

app.get("/survey", (req, res) => {
  res.status(200).render("survey");
});

app.post("/survey", (req, res) => {
  res.redirect("/");
});

app.get("/index", (req, res) => {
  res.status(200).render("index");
});

app.listen(process.env.PORT || 8080);
