// You are provided with the radius of a circle "A". Find the length of its circumference
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data)=>{
  if(data>0)
    console.log((2*22/7*data).toFixed(2));
  else
    console.log("Error");
  });
