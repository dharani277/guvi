// Given a string S, find its length without using any pre-defined functions
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
var a=data.split("");
var c=0;
for (var i=0;i<a.length;i++)
{
  c=c+1;
}
console.log(c);
     });
