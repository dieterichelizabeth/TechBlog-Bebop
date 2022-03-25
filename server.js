const express = require("express");
const app = express();

// mock db data for users and posts
const users = [
  {
    username: "user 1",
  },
  {
    username: "user 2",
  },
];

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

// get route for all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// get route for all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// get route for all posts
app.get("/api/comments", (req, res) => {
  res.json(comments);
});

app.listen(3001);
