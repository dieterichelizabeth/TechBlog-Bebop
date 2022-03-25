const express = require("express");
const routes = require("./routes");
const app = express();

// links routes folder
app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001);
