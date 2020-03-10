// Given a string S consisting of 2 words reverse the order of two words 

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
    var a=userInput[0].split(" ");
    var b=a[0],c=a[1];
	console.log(c,b);
});
