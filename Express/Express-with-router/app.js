const express = require("express");
const home = require("./routes/home");
const schedule = require("./routes/schedule");
const roster = require("./routes/roster");

const app = express();

// Mount router instances
app.use(["/", "/home"], home);
app.use("/schedule", schedule);
app.use("/roster", roster);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
