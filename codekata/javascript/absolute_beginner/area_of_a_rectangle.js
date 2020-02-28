// You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const number=[]
inp.on("line", (data)=>{
  number.push(data);});
inp.on("close",()=>{
  var A=number[0],B=number[1]
  console.log(parseInt(A)*parseInt(B));
});
