// Given 3 numbers A,B,C find the sum of Arithmetic Series with a=A, d=B and n=C
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
    var a=S[0];
    var d=S[1];
    var n=S[2];
    var ap=parseInt(n)/2*(2*parseInt(a)+(parseInt(n)-1)*parseInt(d));
    console.log(ap);
  });
