// You are given a string.Your task is to print only the consonants present in the string without affecting the sentence spacings if present. If no consonants are present print -1
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const userInput=[];
inp.on("line",(data)=>{
  userInput.push(data);});
inp.on("close",()=>{
  var a=userInput[0].split("");
  var count=0;
  var str=''
for(var i=0;i<=a.length-1;i++)
{
if ((a[i]=="a") || (a[i]=="e")|| (a[i]=="i")||(a[i]=="o")||(a[i]=="u")||(a[i]=="I")||(a[i]=="A")||(a[i]=="O")||(a[i]=="E")||(a[i]=="U"))
    {
    count=count+1;
    }
else{
    str=str+a[i];
}
}
var r=str.split("").join("");
if(r==='') {
    console.log("-1")
    }
else 
{
    console.log(r)
    }
});
