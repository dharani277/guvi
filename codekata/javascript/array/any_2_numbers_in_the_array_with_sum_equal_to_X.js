// Given 2 numbers N,X and an array of N elements, check if there exists any 2 numbers in the array with sum equal to X.If found print 'yes' otherwise print 'no'
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
    var z=userInput[0].split(" ");
    var a=z[0];
    var b=z[1];
    var c=userInput[1].split(" ");
    var count=0;
    for(var i=0;i<c.length;i++)
    {
        for(var j=i+1;j<c.length;j++)
        {
        var p=parseInt(c[i])+parseInt(c[j]);
        if(p==b)
        count=count+1;
    }
    }
    if(count===0)
    console.log("no");
    else
    console.log("yes");
    });
