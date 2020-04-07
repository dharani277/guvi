// Given 2 numbers N,M. Find their difference and check whether it is even or odd
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
    var N=S[0];
    var M=S[1];
    var c=N-M;
    if(c%2===0 || c===0)
    {
    console.log("even");
    }
    else
    {
    console.log("odd");
    }
  });
