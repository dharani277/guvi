// Print 'yes' if their product is a perfect square else print 'no'
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
  if(b**2==b*c)
 console.log("yes");
else
 console.log("no");
 });
