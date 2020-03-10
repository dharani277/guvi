// You are given two numbers. Your task is to multiply the two numbers and print the answer

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var a=data.split(" ");
var c=1;
for(var i=0;i<a.length;i++)
{
    c*=(parseInt(a[i]));
}
console.log(c);
});
