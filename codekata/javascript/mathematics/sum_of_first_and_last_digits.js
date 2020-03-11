// Given a number N, print the sum of its first and last digit

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
    var a=data.split("");
        sum=parseInt(a[0])+parseInt(a[a.length-1]);
        console.log(sum);
});
