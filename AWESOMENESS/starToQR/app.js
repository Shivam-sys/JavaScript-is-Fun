const express = require("express");

const qr = require("qr-image");

const app = express();

app.get("/qr", (req, res) => {
  const url = req.query.url;
  if (!url) {
    res.status(400).json({ message: "No url provided" });
    return;
  }
  const qrImage = qr.imageSync(url, { type: "png" });
  res.type("png").send(qrImage);
});

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
