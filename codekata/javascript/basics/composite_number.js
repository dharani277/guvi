// Given a number N, print 'yes' if it is composite else print 'no'
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
var c=0
  for (i=1;i<=data+1;i++)
  {
    if (data % i == 0)
    {
     var d=i
      c=c+1
    }
  }
  if(c>2)
    console.log("yes");
  else
    console.log("no");
});  
        
