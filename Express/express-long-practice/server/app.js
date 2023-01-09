const express = require("express");
require("dotenv").config();

const dogs = require("./routes/dogs");

// Use set NODE_ENV=production , to hide error log from non admins.
// NOTE: express-async-errors prevents server to crash incase of errors, so must use.
require("express-async-errors");

const app = express();
app.use(express.json());
app.use("/dogs", dogs);
app.use("/static", express.static("assets"));

// Middleware to log request method and path, response's status.
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  // use this listener to handle res object once res is done manipulated.
  res.on("finish", () => {
    // read and log the status code of the response
    console.log(res.statusCode);
  });
  next();
};

// For testing purposes, GET /
app.get("/", logger, (req, res) => {
  res.json(
    "Express server running. No content provided at root level. Please use another route."
  );
});

// For testing express.json middleware
app.post("/test-json", logger, (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get("/test-error", logger, async (req, res) => {
  throw new Error("Hello World!");
});

// TODO : Learn Error Handling
// const throwwErr = (req, res, next) => {
//   let err = new Error("The requested resource couldn't be found.");
//   err.statusCode = 500;
//   err.stack = err.stack;
//   // res.on("finish", () => {});
//   next(err);
// };

// app.use(throwwErr, (err, req, res, next) => {
//   console.error(err);
//   res.status(err.statusCode).send(err.message);
// });
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
