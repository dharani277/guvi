// print 'yes' if they can form the sides of a triangle otherwise print 'no'
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
    var a=parseInt(arr[0]),b=parseInt(arr[1]),c=parseInt(arr[2]);
  if(a+b<=c || a+c<=b || b+c<=a)
  {
    console.log("no");
  }
  else
  {
  console.log("yes");
  }
});
