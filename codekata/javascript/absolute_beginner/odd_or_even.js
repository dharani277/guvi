// check whether the giver number is odd or even
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
   if(data==0)
     console.log("Zero");
   else if(data%2==0)
     console.log("Even");
  else
	console.log("Odd");
});
