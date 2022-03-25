// import the router
const router = require("express").Router();

// mock db comments data
const comments = [
  {
    comment_body: "This is really cool!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_body: "Nice!",
    user_id: 2,
    post_id: 1,
  },
];

// get route for all comments
router.get("/", (req, res) => {
  res.json(comments);
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

// export the router
module.exports = router;
