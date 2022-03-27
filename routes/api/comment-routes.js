const router = require("express").Router();
// route: api/comments

// get route for all comments
router.get("/", (req, res) => {
  console.log("gets all comments");
});

// get route for one comment
router.get("/:id", (req, res) => {
  console.log("get one comment");
});

// post route for a new comment
router.post("/", (req, res) => {
  console.log("post one comment");
});

// update route for one comment
router.put("/:id", (req, res) => {
  console.log("update one comment");
});

// delete route for one comment
router.delete("/:id", (req, res) => {
  console.log("delete one comment");
});

module.exports = router;
