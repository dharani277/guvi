// Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'
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
    var b=userInput[1].split(" ");
    var c=a[0];
    var d=a[1],count=0;
    for(var i=0;i<c;i++)
    {
    if(parseInt(d)==parseInt(b[i]))
    count=count+1;
    }
    if(count==1)
    console.log("yes");
    else
    console.log("no");
    });
