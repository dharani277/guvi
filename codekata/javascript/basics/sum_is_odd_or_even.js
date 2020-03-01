// Given 2 numbers N and M add both the numbers and check whether the sum is odd or even
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const user = [];
inp.on("line", (data) => {
	user.push(data);
});
inp.on("close", () => {
	var a=user[0].split(" ");
	var b=a[0],c=a[1];
    if((b+c)%2==0)
 console.log("even");
else
 console.log("odd");
 });
