const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
// ROUTE : http://localhost:3001/api/users

// Get all users
router.get("/", (req, res) => {
  User.findAll()
    .then((allUsers) => res.json(allUsers))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

// Get one user (by id)
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((singleUser) => {
      // if id not found, inform user
      if (!singleUser) {
        res.status(404).json({
          message: "Sorry, the user you are searching for does not exist",
        });
        return;
      }
      res.json(singleUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new user
router.post("/", (req, res) => {
  // expects {"username": "Spike", "password": "12345"}

  User.create({
    username: req.body.username,
    userPassword: req.body.password,
  })
    .then((newUser) => res.status(200).json(newUser))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Destroy one user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedUser) => {
      // if id not found, inform user
      if (!deletedUser) {
        res.status(404).json({
          message: "Sorry, the user you are searching for does not exist",
        });
        return;
      }
      res.status(200).json(deletedUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
