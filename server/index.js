const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.user,
  host: process.env.host,
  password: process.env.password,
  database: process.env.database
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});

app.get("/api/paint", (req, res) => {
  db.query("SELECT * FROM paints", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/paint", (req, res) => {
  const { paintName, status } = req.body;
  db.query(
    "INSERT INTO paints (paintName,status) VALUES (?,?)",
    [paintName, status],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.delete("/api/paint/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM paints WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/api/paint/:id", (req, res) => {
  const id = req.params.id;
  const { paintName, status } = req.body;
  db.query(
    "UPDATE paints SET paintName = ?, status= ? WHERE id = ?",
    [paintName, status, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
