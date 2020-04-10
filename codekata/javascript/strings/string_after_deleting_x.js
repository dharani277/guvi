// Given 2 strings S,X. Print the string after deleting X.If X not found print the same string
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
    var b=userInput[1];
    var x=a[0];
    var y=a[1];
    if(a[0]==b)
    {
        console.log(a[1]);
    }
    else if(a[1]==b)
    {
        console.log(a[0]);
    }
    else
    {
        console.log(x,y);
    }
     });
