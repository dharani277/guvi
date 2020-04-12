// you are given with array of numbers.you have to find whether array is beautiful or not. A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    var c=a[1].split(" ");
    var t=0;
    for(var i=0;i<b;i++)
    {
        t+=parseInt(c[i]);
    }
    if(t%2==0 && t%3==0 && t%5==0)
    {
    console.log("1");
    }
  else
  {
  console.log("0");
    }
    });
