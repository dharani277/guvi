// factorial of a number
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (number) => {
  var fact=1;
	for(var i=1;i<=number;i++)
    {
      var fact=fact*i
      }
  console.log(fact);
});
