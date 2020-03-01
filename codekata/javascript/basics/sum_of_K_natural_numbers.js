// Write a program to print the sum of the first K natural numbers
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var sum=0;
	for(var i=1;i<=data;i++)
    {
      sum=sum+i;
    }
  console.log(sum);
});
