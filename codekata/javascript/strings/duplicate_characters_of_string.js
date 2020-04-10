// You are given a string ‘s’.Print all the duplicate characters of string
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
var c= data.split("");
var d=[];
var count=0;
for(var i=0;i<c.length;i++)
{
    for(var j=i+1;j<c.length;j++)
    {
    if(c[i]==c[j])
    {
        d.push(c[i]);
        count=count+1;
    }
}
}
if(count===0)
console.log("-1");
else
console.log(d.join(" "));
});
