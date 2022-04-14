const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
// ROUTE: http://localhost:3001/api/posts

// Get all posts
router.get("/", (req, res) => {
  Post.findAll()
    .then((allPosts) => res.json(allPosts))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get one post (by id)
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((singlePost) => {
      // if id not found, inform the user
      if (!singlePost) {
        res.status(404).json({
          message: "Sorry, the post you are searching for does not exist",
        });
        return;
      }
      res.json(singlePost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new post
router.post("/", (req, res) => {
  // expects {"title": "My First Post!", "body": "This is my first post", "user_id": 1}

  Post.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.user_id,
  })
    .then((newPost) => res.status(200).json(newPost))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a post (by id)
router.put("/:id", (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPost) => {
      // if post not found- inform the user
      if (!updatedPost) {
        res.status(404).json({
          message: "Sorry, the post you are searching for does not exist",
        });
        return;
      }
      res.status(200).json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Destroy one post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPost) => {
      // if id not found, inform the user
      if (!deletedPost) {
        res.status(404).json({
          message: "Sorry, the post you are searching for does not exist",
        });
        return;
      }
      res.status(200).json(deletedPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
