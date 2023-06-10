const express = require("express");
const crypto = require('crypto')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

paintDict = {};

app.listen(5000, () => {
  console.log("server started on port 5000");
});

app.get("/api/paint", (req, res) => {
  res.send(paintDict);
});

app.post("/api/paint", (req, res) => {
  const { paintName, status } = req.body;
  paintDict[crypto.randomBytes(20).toString('hex')] = {paintName,status}
});

app.delete("/api/paint/:id",(req,res)=>{
  delete paintDict[String(req.params.id)]
})

app.put("/api/paint/:id",(req,res)=>{
  const {paintName,status} = req.body
  paintDict[String(req.params.id)] = {paintName,status}
})
