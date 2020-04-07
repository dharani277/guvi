// Given length L and breadth B of a farm, print the area of the farm upto 5 decimal decimals
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
    var L=S[0];
    var B=S[1];
    var area=parseFloat(L)*parseFloat(B);
    console.log(area.toFixed(5));
  });
