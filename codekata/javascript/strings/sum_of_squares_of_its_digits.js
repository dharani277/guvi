// Given a number N, print the sum of the squares of its digits
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
    var sum=0;
    for(var i=0;i<x.length;i++)
    {
        sqr=x[i]*x[i];
        sum=sum+sqr;
    }
    console.log(sum);
     });
