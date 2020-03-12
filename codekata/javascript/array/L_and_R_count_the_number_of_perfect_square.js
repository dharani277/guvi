// Given a range (i.e) two numbers L and R count the number of perfect squares within the range (inclusive of L and R).If no perfect square exists within the range print '-1

const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
    var a=data.split(" ");
    var b=parseInt(a[0]);
    var c=parseInt(a[1]);
   var count=0;
    for(var i=1;i<=c;i++)
    {
        for(var j=b;j<=c;j++)
        {
        if((i**2)==(j))
        {
            count=count+1;
        }
    }
    }

  if(count>0)
    console.log(count);
    else
    console.log("-1");
});
