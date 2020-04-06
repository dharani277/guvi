// You are given a number ‘n’. You have to tell whether a number is great or not. A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back
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
    var product=1;
    var sum=0;
       for(var i=0;i<a.length;i++)
       {
           number=parseInt(a[i]);
           product*=number;
           sum+=number;
       }
        if(product+sum==userInput)
        console.log("Great");
        else
        console.log("no");
});
