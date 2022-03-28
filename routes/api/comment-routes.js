const router = require("express").Router();
const { Comment } = require("../../models");

// ROUTE: /api/comments
// GET AND DELETE ROUTES COMPELTE

router.get("/", (req, res) => {
  // get all comments
  Comment.findAll()
    .then((allcomments) => res.json(allcomments))
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
    .then((oneComment) => {
      // if id not found, inform user
      if (!oneComment) {
        res.status(404).json({
          message: "Sorry, the comment you are searching for does not exist",
        });
        return;
      }
      // else, display the comment
      res.json(oneComment);
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
    .then((newComment) => res.status(200).json(newComment))
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
    .then((updatedComment) => {
      // if id not found, inform user
      if (!updatedComment) {
        res.status(404).json({
          message: "Sorry, the comment you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(updatedComment);
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
    .then((deletedComment) => {
      // if id not found, inform user
      if (!deletedComment) {
        res.status(404).json({
          message: "Sorry, the comment you are searching for does not exist",
        });
        return;
      }
      // else, inform completed
      res.status(200).json(deletedComment);
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
