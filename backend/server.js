const express = require("express");
const notes = require("../data/notes");

// const port = 5000;
const dotenv = require("dotenv");

/* Initializing Express App */
const app = express();

/* Defining Config from dotenv package - env file */
dotenv.config();

/* API EndPoint */
app.get("/", (req, res) => {
  res.send("API is running!!");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  // console.log("Params 1:", req.params.id, "/api/notes/:id2 : Params 2:", req.params.id2);
  /* Output :
    Params 1: 1 Params 2: 3
  */

  const note = notes.filter((n) => n._id === req.params.id);
  res.send(note);
  /* Output :
        [
            {
                "_id": "5",
                "title": "Learning MERN stack",
                "content": "Started exploring MERN Stack Project, happyily learning it!",
                "category": "Learning"
            }
        ]
  */
});

/* Node Server listening on Port 5000 */

// app.listen(port, () => console.log(`Server running on Port: ${port}`));

// or Using the "dotenv" package
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port No.: ${PORT}`));
