const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User } = require("../models");
const { route } = require("./api");

// Render the landing-page
router.get("/", (req, res) => {
  res.render("landing-page");
});

// Render the homepage
router.get("/home", (req, res) => {
  res.render("homepage");
});

// Render the single-post page
router.get("/post/:id", (req, res) => {
  res.render("single-post");
});

// Render the user dashboard
router.get("/user/:id", (req, res) => {
  res.render("dashboard");
});

// Render the login/signup page
router.get("/login", (req, res) => {
  res.render("login");
});

// Render the login/signup page
router.get("/timeout", (req, res) => {
  res.render("session-timeout");
});

module.exports = router;
