const express = require("express");
const mongoose = require("mongoose");
const joi = require("joi");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));
app.get("/", (req, res) => {
  console.log("MoodLog");

  res.render("main");
});

app.get("/register", (req, res) => {
  res.render("register");
});

const port = 3000;

app.listen(port, () => {
  console.log(port, "DB연결 성공");
});
