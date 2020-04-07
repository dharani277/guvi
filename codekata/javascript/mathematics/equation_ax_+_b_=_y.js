// Given the values of a,b and x in the equation ax + b = y. Find the value of y
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var S=userInput[0].split(" ");
    var a=S[0];
    var b=S[1];
    var x=S[2];
    var y=parseInt(a)*parseInt(x)+parseInt(b);
    console.log(y);
  });
