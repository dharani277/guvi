// You are given with Principle amount($), Interest Rate(%) and Time (years) in that order.Find Simple Interest
//Print the output up to two decimal places (Round-off if necessary)
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const number=[]
inp.on("line", (data)=>{
  number.push(data);});
inp.on("close",()=>{
  var a=[]
  a=number[0].split(" ")
  var P=a[0],T=a[1],R=a[2]
  console.log(((P*T*R)/100).toFixed(2));
});
