// Given a number N, print 'yes' if it is a multiple of 13 else print'no'
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var N=userInput[0];
  if(N%13===0)
    console.log("yes");
  else
    console.log("no");
});
