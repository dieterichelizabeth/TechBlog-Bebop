const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
// ROUTE : http://localhost:3001/api/users

// Get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["userPassword"] },
  })
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
    attributes: { exclude: ["userPassword"] },
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

  console.log(
    "THIS IS THE REQUEST -----------",
    req.body.username,
    req.body.userPassword
  );

  User.create({
    username: req.body.username,
    userPassword: req.body.userPassword,
  })
    .then((newUser) => {
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;

        res.json(newUser);
        console.log("THIS IS THE RESPONSE -----------", newUser);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((userLoginData) => {
    if (!userLoginData) {
      res.status(404).json({ message: "Invalid usernmae" });
      return;
    }

    const validPassword = userLoginData.checkPassword(req.body.userPassword);

    if (!validPassword) {
      res.status(400).json({ message: "Invalid password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userLoginData.id;
      req.session.username = userLoginData.username;
      req.session.loggedIn = true;

      res.json({ user: userLoginData });
    });
  });
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
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
