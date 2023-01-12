// Instantiate router - DO NOT MODIFY
const express = require("express");
const router = express.Router();

/**
 * BASIC PHASE 2, Step A - Instantiate SQLite and database
 *   - Database file: "data_source" environment variable
 *   - Database permissions: read/write records in tables
 */
const sqlite3 = require("sqlite3");
const DATA_SOURCE = process.env.DATA_SOURCE;
const db = new sqlite3.Database(DATA_SOURCE, sqlite3.OPEN_READWRITE);

/**
 * BASIC PHASE 2, Step B - List of all trees in the database
 *
 * Protocol: GET
 * Path: /
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: height-ft, tree, id
 *   - Ordered by the height_ft from tallest to shortest
 */
router.get("/", (req, res) => {
  const query = "SELECT * FROM trees ORDER BY tree;";
  const params = [];
  db.all(query, params, (err, rows) => {
    if (err) {
      next(err);
    } else res.json(rows);
  });
});

/**
 * BASIC PHASE 3 - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, height_ft, ground_circumference_ft
 */

router.get("/:id", (req, res) => {
  const query = "SELECT * FROM trees WHERE id=?";
  const params = [req.params.id];
  db.get(query, params, (err, row) => {
    if (err) {
      next(err);
    } else res.json(row);
  });
});

/**
 * INTERMEDIATE PHASE 4 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
router.post("/", (req, res) => {
  const query =
    "INSERT INTO trees(tree, location, height, ground_circumference_ft) VALUES(?,?,?,?);";
  const params = [
    req.body.name,
    req.body.location,
    req.body.height,
    req.body.size,
  ];

  db.run(query, params, (err) => {
    if (err) next(err);
    else res.json({ message: "Successfully inserted" });
  });
});

/**
 * INTERMEDIATE PHASE 5 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */

router.delete("/:id", (req, res) => {
  const query = "DELETE FROM trees WHERE id = ?";
  const params = [req.params.id];
  db.run(query, params, (err) => {
    if (err) next(err);
    else res.json({ message: "Successfully deleted" });
  });
});

/**
 * INTERMEDIATE PHASE 6 - UPDATE a tree row in the database
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
router.put("/:id", (req, res) => {
  if (req.params.id != req.body.id) {
    res.status(400).json({ error: "ids do not match" });
  } else {
    const query =
      "UPDATE trees SET tree=?, location=?, height=?, ground_circumference_ft=? WHERE id=?";
    const params = [
      req.body.name,
      req.body.location,
      req.body.height,
      req.body.size,
      req.body.id,
    ];
    db.run(query, params, (err) => {
      if (err) next(err);
      else res.json({ message: "success" });
    });
  }
});

// Export class - DO NOT MODIFY
module.exports = router;
