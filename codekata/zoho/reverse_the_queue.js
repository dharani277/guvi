// You are given with a queue. Your task is to reverse the queue elements and print it
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
    var b=userInput[1];
    var c= b.split(" ").reverse().join(" ");
console.log(c);
});
