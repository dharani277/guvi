// print 'yes' if they can form the sides of a scalene triangle else print 'no'
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
	userInput.push(data);
});
inp.on("close", () => {
    var d=userInput[0].split(" ");
    var a=d[0],b=d[1],c=d[2];
	if(a!=b && b!=c && a!=c)
      console.log("yes");
  else
    console.log("no");
});
