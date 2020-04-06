//Given 2 strings and a number K, check whether they differ exactly by K characters
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
 var a=data.split(" ");
 var b=a[0];
 var z=b.split("");
 var c=a[1];
 var y=c.split("");
 var d=a[2];
 var count=0; 
 for(var i=0;i<z.length;i++)
 {
     for(var j=0;j<y.length;j++)
     {
     if(z[i]==y[j])
     count+=1;
     }
 }
if(count==d)
console.log("no");
else
console.log("yes");
});
