// Given a string S, print 'yes' if it has a vowel in it else print 'no'
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
    var x=userInput[0].split("");
    var c=0;
for(var i=0;i<x.length;i++)
{
 if(x[i]=='a' || x[i]=='e' || x[i]=='i' || x[i]=='o' || x[i]=='u')
 {
  c=c+1;
 }
}
if(c>0)
  console.log("yes");
else
  console.log("no");
     });
