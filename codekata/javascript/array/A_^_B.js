// Given numbers A,B find A^B
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
	userInput.push(data);
});
inp.on("close", () => {
    var arr=userInput[0].split(" ");
    var a=arr[0],b=arr[1];
   console.log(a**b);
});
