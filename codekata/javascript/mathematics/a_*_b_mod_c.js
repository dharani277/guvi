// Given 3 numbers a,b,c print a*b mod c
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var S=userInput[0].split(" ");
    var A=S[0];
    var B=S[1];
    var C=S[2];
    var c=A*B%C;
    console.log(c);
 });
