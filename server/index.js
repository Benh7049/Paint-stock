const express = require("express");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//todo add .env
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "paintdb",
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
  const { paintName, status } = req.body;
  paintDict[String(req.params.id)] = { paintName, status };
  res.send(paintDict);
});
