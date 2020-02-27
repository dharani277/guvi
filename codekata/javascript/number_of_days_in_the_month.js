// Print the number of days in the month corresponding to that number
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (month) => {
  if(month==2)
	console.log("28");
  else if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
  console.log("31");
  else if (month==4 || month==6 || month==9 || month==11)
    console.log("30");
  else
    console.log("Error");
});
