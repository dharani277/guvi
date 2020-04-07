// Find the minimum among 10 numbers
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
    var arr=a.sort();
	console.log(arr[0]);
});
