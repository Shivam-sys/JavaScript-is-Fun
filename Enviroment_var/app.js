const express = require("express");
require("dotenv").config();

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const secretMessage = process.env.SECRET_MESSAGE;
app.get("/message", (req, res) => {
  res.send(secretMessage);
});

// TO set port using terminal, run `PORT=3000 node app.js`
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
