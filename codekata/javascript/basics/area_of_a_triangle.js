// Given base(B) and height(H) of a triangle find its area
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
	var number=userInput[0].split(' ');
	var base=number[0],height=number[1];
	var area=(base*height)/2;
	console.log(area);
});
