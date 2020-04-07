// Given a number N, check whether it is a power of 2
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
 if(N%2===0)
   console.log("yes");
 else
   console.log("no");

});
