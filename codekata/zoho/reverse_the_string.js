// You are provided with a string ‘s’. Your task is to reverse the string using stack Data Structure
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
var a= data.split(" ");
var b= a.reverse().join(" ");
console.log(b);
});
