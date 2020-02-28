//given three numbers A, B & C. Print the largest amongst these three numbers
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const number=[]
inp.on("line", (data)=>{
  number.push(data);});
inp.on("close",()=>{
  var A=number[0],B=number[1],C=number[2]
       if(A>B && A>C)
     console.log(A);
else if(B>A && B>C)
  console.log(B);
else
  console.log(C);
});
