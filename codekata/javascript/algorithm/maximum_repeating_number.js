// Given a number N followed by N numbers. Keep the count of each number and print the maximum repeating number
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
    var a=userInput[0];
    var b=userInput[1].split(" ");
    for(var i=0;i<b.length;i++)
    {
        for(var j=i+1;j<b.length;j++)
        {
    if(parseInt(b[i])==parseInt(b[j]))
    {
	console.log(b[i]);
    }
    }
    }
   
});
