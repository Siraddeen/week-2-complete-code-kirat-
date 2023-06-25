// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.use(express.json());

// function calcSum(counter) {
//   let sum = 1;
//   for (let i = 0; i <= counter; i++) {
//     sum += 1;
//   }
//   return sum;
// }

// function handle1(req, res) {
//   var cov = req.query.cov;
//   var calculatedSum = calcSum(cov);
//   var answerObject = {
//     sumISs: calculatedSum,
//   };
//   res.send(answerObject);
// }

// function logResponseBody(jsonBody) {
//   console.log(jsonBody);
// }
// function callbackFn(result) {
//   result.json().then(logResponseBody);
// }
// var sendObj = {
//   method: "GET",
// };
// app.get("/handleSum", handle1);
// fetch("http://localhost:3000/handleSum?cov=12", sendObj).then(callbackFn);
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());

function calcSum(counter) {
  let sum = 1;
  for (let i = 0; i <= counter; i++) {
    sum += 1;
  }
  return sum;
}

function handle1(req, res) {
  var cov = req.query.cov;
  var calculatedSum = calcSum(cov);
  var answerObject = {
    sumISs: calculatedSum,
  };
  res.send(answerObject);
}

function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

app.get("/handleSum", handle1);

axios
  .get("http://localhost:3000/handleSum?cov=12")
  .then((response) => {
    logResponseBody(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
