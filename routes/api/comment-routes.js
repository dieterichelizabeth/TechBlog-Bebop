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

// export the router
module.exports = router;
