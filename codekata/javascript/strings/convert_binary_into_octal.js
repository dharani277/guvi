// Given a binary number convert it into octal format
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);});
inp.on("close",()=>{
  var a=userInput[0];
  var s=parseInt(a, 2);
  var o=s.toString(8)
  console.log(o)
});