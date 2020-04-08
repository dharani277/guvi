// Given a number N, print the sum of squares of all its digits
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var a=userInput[0].split("");
    var sum=0;
    for(var i=0;i<a.length;i++)
    {
        sqr=a[i]*a[i];
        sum=sum+sqr;
    }
    console.log(sum);
    
});
