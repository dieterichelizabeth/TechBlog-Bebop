const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User } = require("../models");
const { route } = require("./api");

// get all posts for homepage
router.get("/", (req, res) => {});

// get one post by id
router.get("/post/:id", (req, res) => {});

// get one user by id
router.ge("/user/:id", (req, res) => {});

module.exports = router;
