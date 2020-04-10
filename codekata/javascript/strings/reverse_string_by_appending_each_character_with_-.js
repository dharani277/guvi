// Given a input string S, reverse the given string by appending each character of the string with '-'
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);});
inp.on("close",()=>{
  var a=userInput[0].split("");
  var b=a.reverse().map(x=> x+"-").join("");
  var r=b.split("");
  r.pop();
  console.log(r.join(""))
});
