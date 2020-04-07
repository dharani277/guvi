// Given a number N, find the factorial of N
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
  fact = 1;
  for(i=1;i<=N;i++)
  {
    fact = fact*i;
  }
  console.log(fact);


});
