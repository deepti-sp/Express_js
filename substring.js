var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.json());

app.post("/", (req, res) => {
  let main = req.body.main.toString();
  let sub = req.body.sub;
  if (main.includes(sub))
    res.send("Substring");
   else
    res.send("Not a substring");
});

app.listen(3000);
console.log("server started");