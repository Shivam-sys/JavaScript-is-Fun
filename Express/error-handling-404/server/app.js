const express = require("express");
const app = express();
const {
  errorLogger,
  errorResponder,
  invalidPathHandler,
} = require("./middleware");

app.get("/", (req, res) => {
  res.send("GET / This is the root URL");
});

// After all routers, create a middleware to handle "not-found" error
// app.use((err, req, res, next) => {
//   console.log(err.stack);
//   res.status(500).send("Something broke!");
// });

// app.use((err, req, res, next) => {
//   res.status(500);
//   res.render("error", { error: err });
//   next();
// });
app.get("/not-found", (req, res) => {
  res.status(404).json({ errorMessage: "not Found" });
});

//Errrr handeling middleware
app.use(errorLogger);
app.use(errorResponder);
app.use(invalidPathHandler);

// app.use((err, req, res, next) => {
//   err = {
//     message: "Sorry, the requested resource couldn't be found.",
//     statusCode: 404,
//   };
//   next(err);
// });
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
