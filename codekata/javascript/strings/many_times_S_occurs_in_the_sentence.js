// Given a sentence and string S, find how many times S occurs in the given sentence.If S is not found in the sentence print -1
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);});
inp.on("close",()=>{
  var a=userInput[0].split(" ");
  var b=userInput[1];
  var count=0;
 for(var i=0;i<a.length;i++)
 {
     if(a[i]==b)
     {
         count=count+1;
     }
 }
 if(count>=1)
  console.log(count);
 else
 console.log("-1");
});
