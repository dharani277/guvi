// Given 2 numbers N and K followed by N elements,print the number of repetition of K otherwise print '-1' if the element not found
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
    if(count>=1)
    console.log(count-1);
    else
    console.log("-1");
    });
