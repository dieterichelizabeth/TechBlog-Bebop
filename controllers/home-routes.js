const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// Render the landing-page
router.get("/", (req, res) => {
  res.render("landing-page", { loggedIn: req.session.loggedIn });
});

// Render the homepage
router.get("/homepage", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "body", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["body", "user_id", "post_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((allPosts) => {
      const posts = allPosts.map((post) => post.get({ plain: true }));

      for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].comments);
      }

      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Render the single-post page
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "body", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["body", "user_id", "post_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((singlePost) => {
      if (!singlePost) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = singlePost.get({ plain: true });

      console.log(post);

      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Render the user dashboard
router.get("/dashboard", (req, res) => {
  // if (req.session.loggedIn) {
  const userId = req.session.user_id;

  User.findOne({
    where: {
      id: userId,
    },
    attributes: ["username"],
    include: [
      {
        model: Post,
        attributes: ["id", "title", "body", "created_at"],
        include: {
          model: Comment,
          attributes: ["body", "user_id", "post_id", "created_at"],
        },
      },
    ],
  }).then((singleUser) => {
    // serialize the data
    const user = singleUser.get({ plain: true });

    console.log(user);

    res.render("dashboard", { user, loggedIn: req.session.loggedIn });
    return;
  });
  // }

  // res.render("login");
});

// Render the new post form
router.get("/new-post", (req, res) => {
  const userId = req.session.user_id;

  User.findOne({
    where: {
      id: userId,
    },
    attributes: ["id"],
  }).then((singleUser) => {
    // serialize the data
    const user = singleUser.get({ plain: true });

    res.render("new-post", { user, loggedIn: req.session.loggedIn });
    return;
  });
});

// Render the login/signup page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/homepage", { loggedIn: req.session.loggedIn });
    return;
  }

  res.render("login");
});

// Render the login/signup page
router.get("/timeout", (req, res) => {
  res.render("session-timeout");
});

module.exports = router;
