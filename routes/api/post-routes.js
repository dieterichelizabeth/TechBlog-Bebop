const router = require("express").Router();
const { Post } = require("../../models");

// ROUTE: api/posts
// GET AND DELETE ROUTES COMPLETE

router.get("/", (req, res) => {
  // get all posts
  Post.findAll()
    .then((allPosts) => res.json(allPosts))
    // if internal server error, inform post
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.get("/:id", (req, res) => {
  // get one post (by id)
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((onePost) => {
      // if id not found, inform the user
      if (!onePost) {
        res.status(404).json({
          message: "Sorry, the post you are searching for does not exist",
        });
        return;
      }
      // else, display the post
      res.json(onePost);
    })
    // if internal server error, inform the user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.post("/", (req, res) => {
  // expects {"title": "My First Post!", "body": "This is my first post", "post_id": 1}

  // post a new post
  Post.create({
    title: req.body.title,
    body: req.body.body,
    post_id: req.body.post_id,
  })
    .then((newPost) => res.status(200).json(newPost))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.put("/:id", (req, res) => {
  // update one post (by id)
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedPost) => {
      // if id not found, inform the user
      if (!updatedPost) {
        res.status(404).json({
          message: "Sorry, the post you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(updatedPost);
      console.log("post updated!");
    })
    // if internal server error, inform the user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

// delete route for one post
router.delete("/:id", (req, res) => {
  // delete one post (by id)
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
      // else, inform completed
      res.status(200).json(deletedPost);
      console.log("post deleted!");
    })
    // if internal server error, inform the user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

module.exports = router;
