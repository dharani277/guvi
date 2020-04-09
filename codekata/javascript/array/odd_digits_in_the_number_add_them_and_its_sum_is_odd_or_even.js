// A number is given as input. Find the odd digits in the number, add them and find if the sum is odd or not. If even print E, if odd print O
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
    var z=userInput[0].split("");
    var sum=0;
    for(var i=0;i<z.length;i++)
    {
        if(z[i]%2!==0)
        {
            sum=sum+parseInt(z[i]);
        }
    }
    if(sum%2===0)
        console.log("E");
    else
    console.log("O");
    });
