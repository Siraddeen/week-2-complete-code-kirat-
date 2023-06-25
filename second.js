function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callbackFn(result) {
  result.json().then(logResponseBody);
}
var sendObj = {
  method: "GET",
};
fetch("http://localhost:3000/handleSum?con=141", sendObj).then(callbackFn);
