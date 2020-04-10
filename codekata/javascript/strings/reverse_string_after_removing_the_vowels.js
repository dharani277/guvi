// Given a string S, print the reverse of the string after removing the vowels.If the resulting string is empty print '-1'
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
if ((a[i]=="a") || (a[i]=="e")|| (a[i]=="i")||(a[i]=="o")||(a[i]=="u"))
    {
    count=count+1;
    }
else{
    str=str+a[i];
}
}
var rev=str.split("").reverse().join("");
if(rev==='') {console.log("-1")}
else {console.log(rev)}
});
