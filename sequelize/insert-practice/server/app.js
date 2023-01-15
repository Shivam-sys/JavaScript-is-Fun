// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require("express-async-errors");
require("dotenv").config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require("./db/models");

// Index of all puppies - DO NOT MODIFY
app.get("/puppies", async (req, res, next) => {
  const allPuppies = await Puppy.findAll({ order: [["name", "ASC"]] });

  res.json(allPuppies);
});

// STEP 3
// Capture the name, age_yrs, breed, weight_lbs, and microchipped attributes
// from the body of the request.
// Use these values to create a new Puppy in the database.
// Respond to the request by sending a success message
app.post("/puppies", async (req, res, next) => {
  const {
    name: puppyName,
    age_yrs,
    breed,
    weight_lbs,
    microchipped,
  } = req.body;
  try {
    await Puppy.create({
      name: puppyName,
      age_yrs: age_yrs,
      breed: breed,
      weight_lbs: weight_lbs,
      microchipped: microchipped,
    });
    res.status(201).json({
      message: "Success",
      data: await Puppy.findOne({ where: { name: puppyName } }),
    });
  } catch (error) {
    next(error);
  }
});

// next: Update a puppy by id
app.put("/puppies/:puppyId", async (req, res, next) => {
  try {
    const puppyId = req.params.puppyId;
    const puppyToUpdate = await Puppy.findByPk(puppyId);
    if (req.body.age_yrs !== undefined) {
      puppyToUpdate.age_yrs = req.body.age_yrs;
    }
    if (req.body.weight_lbs !== undefined) {
      puppyToUpdate.weight_lbs = req.body.weight_lbs;
    }
    if (req.body.microchipped !== undefined) {
      puppyToUpdate.microchipped = req.body.microchipped;
    }
    await puppyToUpdate.save();
    res.status(200).json({
      message: `Successfully updated puppy with id ${puppyId}.`,
      puppy: await Puppy.findByPk(puppyId),
    });
  } catch (error) {
    next(error);
  }
});

// next: Delete a puppy by id
app.delete("/puppies/:puppyId", async (req, res, next) => {
  try {
    const puppyId = req.params.puppyId;
    const puppyToDelete = await Puppy.findByPk(puppyId);
    await puppyToDelete.destroy();
    res.status(200).json({
      message: `Deleted record with id ${puppyId}`,
      deletedRecord: puppyToDelete,
    });
  } catch (error) {
    next(error);
  }
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
  res.json({
    message: "API server is running",
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
