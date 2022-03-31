const router = require("express").Router();
const { User } = require("../../models");

// ROUTE : /api/users
// GET AND DELETE ROUTES COMPLETE

router.get("/", (req, res) => {
  // get all users
  User.findAll()
    .then((allUsers) => res.json(allUsers))
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
    .then((oneUser) => {
      // if id not found, inform user
      if (!oneUser) {
        res.status(404).json({
          message: "Sorry, the user you are searching for does not exist",
        });
        return;
      }
      // else, display the user
      res.json(oneUser);
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
  console.log("req.body.username", req);
  // post a new user
  User.create({
    username: req.body.username,
    userPassword: req.body.password,
  })
    .then((newUser) => res.status(200).json(newUser))
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
    .then((updatedUser) => {
      // if id not found, inform user
      if (!updatedUser) {
        res.status(404).json({
          message: "Sorry, the user you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(updatedUser);
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
    .then((deletedUser) => {
      // if id not found, inform user
      if (!deletedUser) {
        res.status(404).json({
          message: "Sorry, the user you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(deletedUser);
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
