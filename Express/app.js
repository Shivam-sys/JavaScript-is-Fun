const express = require("express");

const app = express();
const PORT = 5000;

let currentID = 0;

const data = {
  users: [],
};

// Middleware functions
const logTime = (req, res, next) => {
  console.log("Current time: ", new Date().toISOString());
  next();
};

// `app.use(logTime)` an application-level middleware- invoked everytime the app recieves a request.
app.use(logTime);

const passOnMessage = (req, res, next) => {
  console.log("Passing on a message!");
  req.passedMessage = "Hello from passOnMessage!";
  next();
};

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// bind the app object with the `get` method with the arguments "/status" route,
// `logTime` function, and `req`, `res`.
const middlewares = [logTime, passOnMessage];
app.get("/status", middlewares, (req, res) => {
  // app.get("/status", logTime, passOnMessage, (req, res) => {
  res.send("The server is alive!" + req.passedMessage);
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
