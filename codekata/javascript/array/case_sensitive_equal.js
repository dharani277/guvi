// Given 2 strings S1 and s2, check whether they are case senitively equal without using any predefined function(case sensitive).If they are not same print 'no'

const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var b=userInput[0].split(" ");
            if(b[0]==b[1])
            console.log("yes");
            else
            console.log("no");
 
});
