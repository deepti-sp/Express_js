var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.json());

app.post("/", (req, res) => {
  let isa1 = req.body.isa1;
  let isa2 = req.body.isa2;
  let isa3 = req.body.isa3;
  let isa4 = req.body.isa4;
  let meanValue = mean(isa1, isa2, isa3, isa4);
  res.send( "Mean :" + meanValue.toString() +"\n" + "Standard Devation:" + standardDevation(isa1, isa2, isa3, isa4, meanValue).toString());
});
mean = (isa1, isa2, isa3, isa4) => {
  let sum = isa1 + isa2 + isa3 + isa4;
  return sum / 4;
};
standardDevation = (isa1, isa2, isa3, isa4, mean) => {
  isa1 -= mean;
  isa2 -= mean;
  isa3 -= mean;
  isa4 -= mean;
  isa1 *= isa1;
  isa2 *= isa2;
  isa3 *= isa3;
  isa4 *= isa4;
  sum = (isa1 + isa2 + isa3 + isa4) / 4;
  return Math.sqrt(sum);
};

app.listen(3000);
console.log("server started");
