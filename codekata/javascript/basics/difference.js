// difference he decides whether to fight or not
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
 console.log(c-b);
 });
