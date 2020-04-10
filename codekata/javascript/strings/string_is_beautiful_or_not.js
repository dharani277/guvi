// You are given a string ‘s’.Your task is to find whether string is beautiful or not. A string is said to be beautiful whenever string is made up of only three characters. All the three characters must be distinct.Print true if string is beautiful and false when it is not beautiful
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);});
inp.on("close",()=>{
  var a=userInput[0].split("");
  if(a.length==3)
  console.log("1");
  else
  console.log("0");
 });
