const router = require("express").Router();
const { Comment } = require("../../models");
// ROUTE: http://localhost:3001/api/comments

// Get all comments
router.get("/", (req, res) => {
  Comment.findAll()
    .then((allcomments) => res.json(allcomments))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new comment
router.post("/", (req, res) => {
  // expects {"body": "Awesome post!", "user_id": "1", "post_id": "2"}

  Comment.create({
    body: req.body.comment_body,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
  })
    .then((newComment) => res.status(200).json(newComment))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

// Update a Comment (by id)
router.put("/:id", (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedComment) => {
      // if Comment not found- inform the user
      if (!updatedComment) {
        res.status(404).json({
          message: "Sorry, the Comment you are searching for does not exist",
        });
        return;
      }
      res.status(200).json(updatedComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Destroy one comment (by id)
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedComment) => {
      // if id not found, inform user
      if (!deletedComment) {
        res.status(404).json({
          message: "Sorry, the comment you are searching for does not exist",
        });
        return;
      }
      res.json(deletedComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
