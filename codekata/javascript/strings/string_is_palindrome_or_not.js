// Radha newly learnt about palindromic strings.A palindromic string is a string which is same when read from left to right and also from right to left.Help her in implementing the logic
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
var c= data.split("").reverse().join("");
if(data==c)
console.log("1");
else
console.log("0");
});
