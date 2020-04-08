// Given a number N and an array of N elements, find the sum of the sums obtained by considering all consecutive pairs of adjacent elements
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var a=userInput[0];
    var b=userInput[1].split(" ");
    var sum=0;
    for(var i=0;i<b.length-1;i++)
    {
        var c=parseInt(b[i])+parseInt(b[i+1]);
        sum=sum+parseInt(c);
    }
     console.log(sum);
    });
