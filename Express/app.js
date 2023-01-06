const express = require("express");

const app = express();
const PORT = 5000;

let currentID = 0;

const data = {
  users: [],
};

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/status", (req, res) => {
  res.send("The server is alive!");
});

app.get("/users", (req, res) => {
  res.json(data.users);
});

app.post("/users", (req, res) => {
  user = {
    userid: currentID++,
    username: "tempName",
  };
  data.users.push(user);
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
