// Given a string S.Validate if a given string is numeric.print 'yes' if it is a numeric otherwise print 'no'
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var S=userInput[0];
    var c=parseInt(S)/1;
if(c==S)
console.log("yes");
else
console.log("no");
});
