// import dependencies
const express = require("express");

// definitions
const routes = require("./routes");
const app = express();

// links routes folder
app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sets the port
app.listen(3001);
