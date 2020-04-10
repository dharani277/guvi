// You are given a string ‘s’. Your task is to tell whether string is beautiful or not.A beautiful string is a string in which String starts with ‘a’ or ‘A’ and middle element is either ‘m’ or ‘M’ and last element is ‘z’or ‘Z’
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
    var c=data.split("");
if((c[0]=='a' || c[0]=='A') && (c[1]=='m' || c[1]=='M') && (c[2]=='z'|| c[2]=='Z'))
  console.log("1");
else
  console.log("0");
});
