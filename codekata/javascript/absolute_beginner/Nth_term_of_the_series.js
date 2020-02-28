// You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 25, 36, 49, 64, 81, .......
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data)=>{
  if(data==0)
    console.log("0");
  else if(data>0)
    console.log(data*data);
  else
    console.log("Error");
  });
