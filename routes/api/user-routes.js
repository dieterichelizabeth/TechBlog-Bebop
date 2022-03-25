// import the router
const router = require("express").Router();

// mock db data for users
const users = [
  {
    username: "user 1",
  },
  {
    username: "user 2",
  },
];

// get route for all users
router.get("/", (req, res) => {
  res.json(users);
});

// export the router
module.exports = router;
