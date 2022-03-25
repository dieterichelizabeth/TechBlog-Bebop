const router = require("express").Router();

// get route for all users
router.get("/", (req, res) => {
  console.log("gets all users");
});

// get route for one user
router.get("/:id", (req, res) => {
  console.log("get one user");
});

// post route for a new user
router.post("/", (req, res) => {
  console.log("post one user");
});

// update route for one user
router.put("/:id", (req, res) => {
  console.log("update one user");
});

// delete route for one user
router.delete("/:id", (req, res) => {
  console.log("delete one user");
});

module.exports = router;
