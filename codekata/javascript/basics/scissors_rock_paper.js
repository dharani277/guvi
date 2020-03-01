// Let P represent Paper, R represent Rock and S represent Scissors. Given 2 out of the 3 determine which one wins. If its a draw print 'D'
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
	var str1=a[0],str2=a[1];
   if(str1=="R" && str2=="P")
    console.log("P");
  else if(str1=="S" && str2=="P")
    console.log("S")
    
  else if(str1=="R" && str2=="S")
    console.log("R");

  else
    console.log("D");
});
