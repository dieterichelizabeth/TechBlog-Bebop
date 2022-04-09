const router = require("express").Router();

// define the routes
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// position the users, posts, and comments routes
router.use("/users", userRoutes); // http://localhost:3001/api/users
router.use("/posts", postRoutes); // http://localhost:3001/api/posts
router.use("/comments", commentRoutes); // http://localhost:3001/api/comments

module.exports = router;
