// Given a day, print 'yes' if it is a holiday otherwise print'no'.Assume that weekend days are holidays
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	if(data=="saturday" || data=="sunday")
	{
	    console.log("yes");
	}
	else
	{
	    console.log("no");
	}
});
