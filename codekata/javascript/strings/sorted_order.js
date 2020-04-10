// You are given some words all in lower case letters your task is to print them in sorted order
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
    var c= data.split(" ").reverse().join(" ");
console.log(c);
     });
