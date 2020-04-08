// Given 2 numbers N and K.Print the number of occurrences of K in N.If K is not found print '-1'
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var s=userInput[0].split(" ");
    var a=s[0].split("");
    var b=s[1];
    var count=0;
    for(var i=0;i<a.length;i++)
    {
        if(b==a[i])
        {
            count=count+1;
        }
    }
  if(count>0)
console.log(count);
  else
    console.log("-1");
});
