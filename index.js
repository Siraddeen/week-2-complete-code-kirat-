const express = require("express");
var bodyParser = require("body-parser"); // external library to compute body arguments
const app = express();
const port = 3000;

//         // introducing middlewares
// function middlewar1(req, res, next) {
//   console.log("from inside the middlewar : " + req.headers.con);
//   next();
// }

app.use(bodyParser.json());

function calSum(counter) {
  let sum = 1;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

// function calMul(counter) {
//   let mul = 1; // 4 ==> 1*2*3*4==24
//   for (let i = 1; i <= counter; i++) {
//     mul *= i;
//   }
//   return mul;
// }
//app.use(middlewar1);

// function handleFirstRequest(req, res) {
//   let answ = "the ok  sum is " + calSum(100) + " ok mm";        // while not using the request command
//   res.send(` ${answ}`);
// }

// //  1) using queries parameters
// function handleFirstRequest(req, res) {
//   var coun = req.query.calc; // Retrieve the counter value from query parameters
//   let answ = "the ok sum is " + calSum(coun) + " ok mm"; // Use the retrieved counter value
//   console.log(req.query.c2);
//   res.send(` ${answ}`);
// }

// // 2) using headers
// function handleFirstRequest(req, res) {
//   //console.log(req.headers);
//   var con = req.headers.con;
//   //var coun = req.query.calc; // Retrieve the counter value from query parameters
//   let answ = "the ok sum is " + calSum(con) + " ok mm"; // Use the retrieved counter value
//   //console.log(req.query.c2);
//   res.send(` ${answ}`);
// }

// using conditions on body to minimise the input arguments
// // 3) using body
// function handleFirstRequest(req, res) {
//   console.log(req.body);
//   var con = req.body.con;
//   if (con < 100000) {
//     //var coun = req.query.calc; // Retrieve the counter value from query parameters
//     let answ = "the ok sum is " + calSum(con) + " ok mm"; // Use the retrieved counter value
//     //console.log(req.query.c2);
//     res.send(` ${answ}`);
//   } else {
//     res.status(411).send("your number is too big");
//   }
// }

// 3) using body
function handleFirstRequest(req, res) {
  var con = req.query.con;
  var calculatedSum = calSum(con);
  // var calculatedMul = calMul(con);
  var answerObject = {
    sumIs: calculatedSum,
    //multi: calculatedMul,
  };
  res.send(answerObject);
}
function createU(req, res) {
  res.send("hello  ggs  man");
}

// function givePage(req, res) {
//   res.send(`<!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Document</title>
//     </head>
//     <body>
//       <b>hello there how do you do    yoooooo</b>
//     </body>
//   </html>
//   `);
// }
// app.get("/", givePage);
////app.get("/handleSum", handleFirstRequest); // '/'  is a route that we call

app.get("/handleSum", handleFirstRequest);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);
