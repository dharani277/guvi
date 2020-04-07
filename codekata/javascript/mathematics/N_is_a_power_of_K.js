// Given 2 numbers N and K.check if N is a power of K.Print 'yes' if it is a power of k otherwise print 'no
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
    var N=S[0];
    var K=S[1];
 if(N==K*K)
  console.log("yes");
 else
  console.log("no");
  });
