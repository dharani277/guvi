// the number is negative than rampal is a number which has sum of first and last digit as multiple of 4  

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
    var a=data.split("");
        sum=parseInt(a[a.length-2])+parseInt(a[a.length-1])
        if(sum%4==0)
        console.log("yes");
        else
        console.log("no");
});
