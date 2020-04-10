//  You are given a string. You have to print “Wonder” if the string is wonderful and -1 if it is not. A wonderful string is a string,which is made up of exactly 3 characters
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);});
inp.on("close",()=>{
  var a=userInput[0].split("");
  var count=0;
  for(var i=0;i<a.length;i++)
  {
      if(a[i]!=a[i+1])
      count=count+1;
  }
  if(count==3)
  console.log("Wonder");
  else
  console.log("-1");
 });
