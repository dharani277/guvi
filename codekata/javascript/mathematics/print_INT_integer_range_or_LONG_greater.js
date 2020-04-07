// Given a number N, print 'INT' if it is integer range or print 'LONG' if it is greater
const readline = require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var N=userInput[0];
 if(N<=100000)
  console.log("INT");
 
 else
  console.log("LONG");
 
});
