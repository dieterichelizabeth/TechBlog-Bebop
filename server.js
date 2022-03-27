// import dependencies
const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

// middleware to parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sets the port
app.listen(PORT, () =>
  console.log(`Now listening on URL: http://localhost:3001`)
);
