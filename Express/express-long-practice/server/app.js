const express = require("express");
// Use set NODE_ENV=production , to hide error log from non admins.
// NOTE: express-async-errors prevents server to crash incase of errors, so must use.
require("express-async-errors");
const app = express();

app.use("/static", express.static("assets"));
// For testing purposes, GET /
app.get("/", (req, res) => {
  res.json(
    "Express server running. No content provided at root level. Please use another route."
  );
});

app.use(express.json());
// For testing express.json middleware
app.post("/test-json", (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get("/test-error", async (req, res) => {
  throw new Error("Hello World!");
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
