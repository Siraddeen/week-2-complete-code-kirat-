// rough work

// // const fd = require("fs");
// // function s(err, data) {
// //   console.log(data);
// // }
// // fd.readFile("a.txt", "utf-8", s);

const express = require("express");
const app = express();
const port = 3001;

function abn(stc) {
  if (stc < 100) {
    console.log("number is less than 100");
  } else {
    console.log("given number is heigher than 100");
  }
  return stc;
}
//console.log(abn(122));

function first(req, res) {
  var cot = req.query.abnn;
  let ans = abn(parseInt(cot));
  console.log("the answer is : " + ans);
  res.send(
    `ok the given number is ${ans} ,${
      ans < 100
        ? "given number is less than 100"
        : "given number heiger than 100"
    }`
  );
}

// function first(req, res) {
//   var cot = req.query.abnn;
//   let ans = abn(parseInt(cot));
//   console.log("the answer is: " + ans);
//   res.send(
//     `ok the given number is ${ans}, ${ans < 100? "given number is less than 100": "given number is higher than 100"}`
//   );
// }

app.get("/first", first);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

// const express = require("express");
// const app = express();
// const port = 3001;

// function abn(stc) {
//   if (stc < 100) {
//     console.log("number is less than 100");
//   } else {
//     console.log("given number is higher than 100");
//   }
//   return stc;
// }

// function first(req, res) {
//   var cot = req.query.abnn;
//   let ans = abn(parseInt(cot));
//   console.log("the answer is: " + ans);
//   res.send("ok");
// }

// app.get("/first", first);

// function started() {
//   console.log(`Example app listening on port ${port}`);
// }

// app.listen(port, started);
