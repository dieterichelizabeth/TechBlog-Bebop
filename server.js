// import dependencies
const express = require("express");

// definitions
const sequelize = require("./connect/connection");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

// middleware to parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on URL: http://localhost:3001`)
  );
});
