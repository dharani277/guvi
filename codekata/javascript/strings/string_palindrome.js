// Given a string S of length N, find whether the given string is a palindrome using stack or linked list and print 'yes' otherwise print 'no'

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
    var count=0;
    var n=data.split("")
    var x=[];
	for(var i=data.length-1;i>=0;i--)
	{
	    x.push(n[i])
	}
	for(i=0;i<n.length;i++)
	{
	    if(x[i]==n[i])
	    count=0
	    else
	    count++;
	}
	if(count==0)
	console.log("yes");
	else
	console.log("no");
});
