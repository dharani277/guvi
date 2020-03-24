// Given 2 numbers N,K followed by a sorted array of N elements, search and tell if an element K is present in the array.print 'yes' if element is present otherwise print 'no'

const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
    var count=0;
    var a=userInput[0].split(" ");
    var c=a[1];
    var b=userInput[1].split(" ");
    for(var i=0;i<b.length;i++)
    {
    if(parseInt(c)==parseInt(b[i]))
    {
	count=count+1;
    }
    }
    if(count>=1)
    console.log("yes");
    else
    console.log("no");
});
