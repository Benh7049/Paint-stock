const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

paintList = [];

app.listen(5000, () => {
  console.log("server started on port 5000");
});

app.get("/api/paint", (req, res) => {
  console.log(paintList);
  res.send(paintList);
});

app.post("/api/paint", (req, res) => {
  const { paintName, status } = req.body;
  paintList.push({paintName,status})
});
