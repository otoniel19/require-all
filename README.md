# require-all

> import all from a module

- usage

```js
const reqAll = require("require-all");
reqAll("fs"); // inform the module name

const test = readFileSync("./test.js").toString();
console.log(test);
/*
 will output: 
   const reqAll = require("./index");
   reqAll("fs");

   readFile("./test.js", (err, dt) => {
     console.log(dt.toString());
   });
*/
```
