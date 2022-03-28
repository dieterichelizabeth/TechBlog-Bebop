const router = require("express").Router();
const { Post } = require("../../models");

// ROUTE: api/posts

router.get("/", (req, res) => {
  // get all posts
  Post.findAll()
    .then((postData) => res.json(postData))
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
    .then((postData) => {
      // if id not found, inform the user
      if (!postData) {
        res.status(404).json({
          message: "Sorry, the post you are searching for does not exist",
        });
        return;
      }
      // else, display the post
      res.json(postData);
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
    .then((postData) => res.status(200).json(postData))
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
    .then((postData) => {
      // if id not found, inform the user
      if (!postData) {
        res.status(404).json({
          message: "Sorry, the post you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(postData);
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
    .then((postData) => {
      // if id not found, inform the user
      if (!postData) {
        res.status(404).json({
          message: "Sorry, the post you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(postData);
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
