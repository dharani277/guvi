// Given a number N,check whether it has repeating digits in it.print 'yes' if it has repeating digits otherwise print 'no'
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () =>{
var v=userInput[0].split("");
var count=0;
for(var i=0;i<v.length;i++)
{
    for(var j=i+1;j<v.length;j++)
    {
    if(v[i]==v[j])
    {
        count=count+1;
    }
}
}
if(count>=1)
{
    console.log("yes");
}
else
{
    console.log("no");
}
});
