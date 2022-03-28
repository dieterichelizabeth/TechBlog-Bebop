const router = require("express").Router();
const { Comment } = require("../../models");

// ROUTE: /api/comments

router.get("/", (req, res) => {
  // get all comments
  Comment.findAll()
    .then((commentData) => res.json(commentData))
    // if internal server error, inform user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.get("/:id", (req, res) => {
  // get one comment (by id)
  Comment.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((commentData) => {
      // if id not found, inform user
      if (!commentData) {
        res.status(404).json({
          message: "Sorry, the comment you are searching for does not exist",
        });
        return;
      }
      // else, display the comment
      res.json(commentData);
    })
    // if internal server error, inform user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.post("/", (req, res) => {
  // expects {"body": "Awesome post!", "user_id": "1", "post_id": "2"}

  // post a new comment
  Comment.create(req.body)
    .then((commentData) => res.status(200).json(commentData))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.put("/:id", (req, res) => {
  // expects {"body": "Awesome post!", "user_id": "1", "post_id": "2"}

  // update one comment (by id)
  Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((commentData) => {
      // if id not found, inform user
      if (!commentData) {
        res.status(404).json({
          message: "Sorry, the comment you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(commentData);
      console.log("Comment updated!");
    })
    // if internal server error, inform user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

router.delete("/:id", (req, res) => {
  // delete one comment (by id)
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((commentData) => {
      // if id not found, inform user
      if (!commentData) {
        res.status(404).json({
          message: "Sorry, the comment you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(commentData);
      console.log("Comment deleted!");
    })
    // if internal server error, inform user
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something has gone wrong, please try again" });
    });
});

module.exports = router;
