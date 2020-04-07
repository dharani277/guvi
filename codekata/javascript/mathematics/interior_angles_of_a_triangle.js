// Given 3 angles A,B,C find if they can be interior angles of a triangle.If they form an interior triangle for the given angle,print 'yes' otherwise print 'no'
const readline = require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    var D=userInput[0].split(" ");
    var A=D[0];
    var B=D[1];
    var C=D[2];
 if(parseInt(B)+parseInt(C)==180-parseInt(A))
  console.log("yes");
 else
  console.log("no");
});
