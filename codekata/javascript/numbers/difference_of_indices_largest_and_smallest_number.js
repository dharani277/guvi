// You are given with an array of numbers, Your task is to print the difference of indices of largest and smallest number.All number are unique
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var m=Math.max(...b);
    var n=Math.min(...b);
    for(var i=0;i<b.length;i++)
    {
        if(b[i]==m)
        {
            var t=i;
        }
        if(b[i]==n)
        {
            var y=i;
        }
    }
    console.log(t-y);
    });
