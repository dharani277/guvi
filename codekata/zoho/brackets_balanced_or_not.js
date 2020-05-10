// You are given a string of different type of brackets. Your task is to check whether the given string is balanced or not balanced. A string is said to be balanced if the number of opening brackets are equal to the number of closing brackets where the brackets should be of same kind
const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var userInput=[];
imp.on("line",(data)=>{
    userInput.push(data);
});
var a=[],count=0,count1=0;
imp.on("close",()=>{
  var a=userInput[0].split("");
  for(var i=0;i<a.length;i++)
  {
  if(a[i]=='{')
  {
  count=count+1;
  }
  if(a[i]=='}')
  {
      count1=count1+1;
  }
  if(a[i]=='(')
  {
  count=count+1;
  }
  if(a[i]==')')
  {
      count1=count1+1;
  }
  if(a[i]=='[')
  {
  count=count+1;
  }
  if(a[i]==']')
  {
      count1=count1+1;
  }
  }
  if(count==count1)
  {
      console.log("yes");
  }
  else
  {
      console.log("no");
  }
});
