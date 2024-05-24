const express = require("express");
const dbConnection = require("./config/config");
const posts = require("./routes");

const app = express();

app.use(express.json());

app.use("/", posts);

dbConnection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT} on localhost:5000`)
);

module.exports = app;
