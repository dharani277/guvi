// Given a string S consisting of lowercase latin letters, arrange all its letters in lexographical order using Counting Sort

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
	userInput.push(data);
});
inp.on("close", () => {
    var s='';
	var a=userInput[0];
	var b=userInput[1].split("");
	var d=[];
	d=b.sort();
	for(var i=0;i<d.length;i++)
	{
	    s+=d[i]+'';
	}
	console.log(s);
	
});
