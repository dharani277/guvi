//Remove all the whitespaces and find it's length
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
const a = data.split(/\s/).join('');
var c=a.length
console.log(c);
});
