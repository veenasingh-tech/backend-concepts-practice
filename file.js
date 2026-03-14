const fs = require("fs");

console.log("1");
// Non- Blocking ...
const result = fs.readFile("contacts.txt", "utf-8", (err, result) =>{
    console.log(result);
});

//console.log("2");
//console.log("3");

 



