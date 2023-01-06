// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

// any body in a request that is made with a 'Content-Type: of application/json' header,
// will be deserialized and saved to the body property on the request object, req.body.
app.use(express.json());

/* Test the above comment using this code.*/
/* app.use((req, res, next) => {
  console.log("Body:", req.body);
  next();
}); */

app.get("/", (req, res) => {
  res.send(req.body);
});

app.get("/artists", (req, res) => {
  const allArtists = getAllArtists();
  res.status(200).header("Content-type: application/json").json(allArtists);
});

app.post("/artists", (req, res) => {
  const newArtist = addArtist(req.body);
  res.status(201).header("Content-type: application/json").json(newArtist);
});

app.get("/artists/:artistId", (req, res) => {
  const artist = getArtistByArtistId(req.params.artistId);
  res.status(200).header("Content-type: application/json").json(artist);
});

app.put("/artists/:artistId", (req, res) => {
  let artist = editArtistByArtistId(req.params.artistId, req.body);
  res.status(200).header("Content-type: application/json").json(artist);
});

app.delete("/artists/:artistId", (req, res) => {
  deleteArtistByArtistId(req.params.artistId);
  res
    .status(200)
    .header("Content-type: application/json")
    .json({ message: "Successfully deleted" });
});

app.get("/artists/latest", (req, res) => {
  const latestArtist = getLatestArtist();
  res.status(200).header("Content-type: application/json").json(latestArtist);
});

app.get("/artists/latest/albums", (req, res) => {
  const latestArtistAlbums = getAlbumsForLatestArtist();
  res
    .status(200)
    .header("Content-type: application/json")
    .json(latestArtistAlbums);
});

app.post("/albums", (req, res) => {
  const newAlbum = addAlbumByArtistId(req.body);
  res.status(201).header("Content-type: application/json").json(newAlbum);
});
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
