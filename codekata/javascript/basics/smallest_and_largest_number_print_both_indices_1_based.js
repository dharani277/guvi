// Given a number N followed by N numbers.Find the smallest number and largest number and print both the indices(1 based indexing)
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);});
inp.on("close",()=>{
  var min,max;
  var a=userInput[1].split(" ");
  min=Math.min.apply(null,a);
  max=Math.max.apply(null,a);
  console.log(a.indexOf(String(min))+1,a.indexOf(String(max))+1);
});
