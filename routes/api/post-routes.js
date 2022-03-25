// import the router
const router = require("express").Router();

// mock db posts data
const posts = [
  {
    post_title: "awesome post",
    post_body: "This is an awesome post",
    author: "user 1",
  },
  {
    post_title: "awesome post number 2",
    post_body: "This is another awesome post",
    author: "user 2",
  },
];

// get route for all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// export the router
module.exports = router;
