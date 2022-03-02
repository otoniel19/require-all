const reqAll = require("./index");
reqAll("fs");

readFile("./test.js", (err, dt) => {
  console.log(dt.toString());
});
