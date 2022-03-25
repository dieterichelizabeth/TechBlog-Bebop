const router = require("express").Router();
const apiRoutes = require("./api");

// use the comment, post, and user routes in the api folder
router.use("/api", apiRoutes);

// needs to go after every other CRUD route
router.use((req, res) => {
  res.status(404).end();
});

// export the router
module.exports = router;
