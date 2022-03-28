const router = require("express").Router();
const { User } = require("../../models");

// ROUTE : /api/users

router.get("/", (req, res) => {
  // get all users
  User.findAll()
    .then((userData) => res.json(userData))
    // if internal server error, inform user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.get("/:id", (req, res) => {
  // get one user (by id)
  User.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      // if id not found, inform user
      if (!userData) {
        res.status(404).json({
          message: "Sorry, the user you are searching for does not exist",
        });
        return;
      }
      // else, display the user
      res.json(userData);
    })
    // if internal server error, inform user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.post("/", (req, res) => {
  // expects {"username": "Spike", "password": "12345"}
  console.log(req.body.username, req.body.password);
  // post a new user
  User.create({
    username: req.body.username,
    userPassword: req.body.password,
  })
    .then((userData) => res.status(200).json(userData))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.put("/:id", (req, res) => {
  // expects {"username": "Spike", "password": "12345"}

  // update one user (by id)
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      // if id not found, inform user
      if (!userData) {
        res.status(404).json({
          message: "Sorry, the user you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(userData);
      console.log("User updated!");
    })
    // if internal server error, inform user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.delete("/:id", (req, res) => {
  // delete one user (by id)
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      // if id not found, inform user
      if (!userData) {
        res.status(404).json({
          message: "Sorry, the user you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(userData);
      console.log("User deleted!");
    })
    // if internal server error, inform user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

module.exports = router;
