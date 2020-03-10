// Given a number N and an array of N integers, find the sum of all the negative numbers in the array

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
    for(var i=0;i<a;i++)
    {
            if(b[i]<0)
            {
            sum=sum+parseInt(b[i])
            }
        }
    console.log(sum)
 
});
