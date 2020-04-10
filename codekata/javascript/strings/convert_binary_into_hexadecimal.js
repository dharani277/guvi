// Given a binary number convert it to hexadecimal
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);});
inp.on("close",()=>{
  var a=userInput[0];
  var s=parseInt(a, 2);
  var o=s.toString(16)
  console.log(o)
});
