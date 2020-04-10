// Given a string S, print 'yes' if it is a palindrome or 'no' if it is not a palindrome
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
    var c= data.split("").reverse().join("");
if(data==c)
  console.log("yes");
else
  console.log("no");
     });
