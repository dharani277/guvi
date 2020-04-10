// Given a string S, print the reverse of the string
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
var c= data.split("").reverse().join("");
console.log(c);
});
