// write a program to check whether this year is a leap year or not
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (year) => {
   if(year%4==0)
	console.log("Y");
   else
     console.log("N");
});
