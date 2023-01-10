const express = require("express");
const app = express();

// Process environment variables
require("dotenv").config();

// Instantiate database here
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(
  process.env.DATABASE_SOURCE,
  sqlite3.OPEN_READWRITE
  // OPEN_READWRITE means Express server can read and write to the database (that is,(DML Commands) SELECT, INSERT, UPDATE, and DELETE). NOT be able to CREATE or DROP tables.
);

// Express using json
app.use(express.json());

// Routes will go here
app.get("/trees", (req, res, next) => {
  const query = "SELECT * FROM trees";
  const params = [];
  db.all(query, params, (err, rows) => {
    if (err) next(err);
    else res.json(rows);
  });
});

app.post("/trees", (req, res, next) => {
  const query = `
    INSERT INTO trees (tree, location, height_ft, ground_circumference_ft) 
    VALUES (?, ?, ?, ?);
    `;

  // get data from body and put in params array
  const params = [
    req.body.name,
    req.body.location,
    req.body.height,
    req.body.size,
  ];

  // Query to get newly added row.
  const queryLast = "SELECT * FROM trees ORDER BY id DESC LIMIT 1";

  // For non-SELECT statements, db.run()
  db.run(query, params, (err) => {
    if (err) next(err);
    else {
      db.get(queryLast, [], (err, row) => {
        if (err) next(err);
        else res.json(row);
      });
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
