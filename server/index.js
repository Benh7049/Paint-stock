const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.URI,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

// client.query("SELECT * FROM paints;", (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
// });

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/api/paint", (req, result) => {
  client.query(
    "SELECT * FROM paints",
    (err, res) => {
      if (err) console.log(err);
      result.send(res)
    }
  );
});

app.post("/api/paint", (req, result) => {
  const { paintName, status } = req.body;
  client.query(
    "INSERT INTO paints(paintname,status) VALUES ($1, $2) RETURNING *",
    [paintName, status],
    (err, res) => {
      if (err) console.log(err);
    }
  );
});

app.delete("/api/paint/:id", (req, result) => {
  const id = req.params.id;
  client.query(
    "DELETE FROM paints WHERE id = $1",
    [id],
    (err, res) => {
      if (err) console.log(err);
    }
  );
});

app.put("/api/paint/:id", (req, result) => {
  const id = req.params.id;
  const { paintName, status } = req.body;
  client.query(
    "UPDATE paints SET paintname = $1, status = $2 WHERE id = $3",
    [paintName, status, id],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        result.send(res);
      }
    }
  );
});
