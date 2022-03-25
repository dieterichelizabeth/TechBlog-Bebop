// import dependencies
const express = require("express");

const routes = require("./routes");
const app = express();

app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sets the port
app.listen(3001);
