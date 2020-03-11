// Divide two given integers A and B

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
    var a=data.split(" ");
        sum=parseInt(a[0])/parseInt(a[1])
        console.log(sum);
});
