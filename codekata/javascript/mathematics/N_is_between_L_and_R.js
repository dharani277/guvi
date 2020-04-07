// Print 'yes' if N is between L and R else print 'no'
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
	var b=user[1].split(" ")
	var c=parseInt(b[0]),d=parseInt(b[1]);
count=0
for(i=c;i<=d+1;i++)
{
  if(a==i)
    count=count+1
}
if(count==1)
 console.log("yes");
else
 console.log("no");
 });
