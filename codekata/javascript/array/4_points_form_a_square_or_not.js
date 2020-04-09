// Check whether the given 4 points form a square or not
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
	var num1=parseInt(a[0]),num2=parseInt(a[1]);
	var a=userInput[1].split(" ");
	var num3=parseInt(a[0]),num4=parseInt(a[1]);
	var a=userInput[2].split(" ");
	var num5=parseInt(a[0]),num6=parseInt(a[1]);
	var a=userInput[3].split(" ");
	var num7=parseInt(a[0]),num8=parseInt(a[1]);
	if((num1+num3+num5+num7)==(num2+num4+num6+num8))
	console.log("yes");
	else
	console.log("no");
});
