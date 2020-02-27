// given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (number) => {
	console.log(parseInt(number)*1000);
    console.log(parseInt(number)*100000);
});
