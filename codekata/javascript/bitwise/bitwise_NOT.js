// Given a number N, print the Bitwise NOT of that number

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
	var d=~data;
  console.log(d);
});
