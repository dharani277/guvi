// Given k sorted arrays of possibly different sizes, merge them and print the sorted output
const readline=require('readline');
const imp=readline.createInterface({
    input:process.stdin
});
var userInput=[];
imp.on("line",(data)=>{
    userInput.push(data);
});
var x=[],a=[],c=[],d=[];
imp.on("close",()=>{
  var k=userInput[0];
  for(var m=1;m<=k;m++)
  {
    var a=userInput[m].split(" ");
    for(var l=0;l<a.length;l++)
    {
      x.push(parseInt(a[l]));
    }
  }
    for(var i=0;i<x.length;i++)
    {
        for(var j=i+1;j<=x.length;j++)
        {
        if(parseInt(x[i])>parseInt(x[j]))
        {
        c =  x[i];
        x[i] = x[j];
        x[j] = c;
        }
}
        d.push(x[i]);
    }
    console.log(d.join(" "));
});
