const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

// position the api route
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// no route has handled the request
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
