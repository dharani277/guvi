// find and print the smaller number among two numbers
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
  var first=a[0],second=a[1]
  if(first<second)
    console.log(first);
  else
    console.log(second);
});
