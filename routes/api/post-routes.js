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

// export the router
module.exports = router;
