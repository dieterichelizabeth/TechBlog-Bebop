const router = require("express").Router();
// route: api/posts

// get route for all posts
router.get("/", (req, res) => {
  console.log("gets all posts");
});

// get route for one post
router.get("/:id", (req, res) => {
  console.log("get one post");
});

// post route for a new post
router.post("/", (req, res) => {
  console.log("post one post");
});

// update route for one post
router.put("/:id", (req, res) => {
  console.log("update one post");
});

// delete route for one post
router.delete("/:id", (req, res) => {
  console.log("delete one post");
});

module.exports = router;
