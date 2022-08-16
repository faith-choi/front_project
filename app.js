const express = require("express");
const mongoose = require("mongoose");
const joi = require("joi");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));
app.get("/", (req, res) => {
  res.render("main");
});

app.get("/main", (req, res) => {
  res.render("main");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/rank", (req, res) => {
  res.render("rank");
});

app.get("/mypage", (req, res) => {
  res.render("mypage");
});

app.get("/about", (req, res) => {
  res.render("about");
});

const port = 3000;

app.listen(port, () => {
  console.log(port, "DB연결 성공");
});
