// Given a number N followed by N numbers. Out of these N numbers some of them are repeated. Write a program to find the first number which is repeated. If no numbers are repeated print 'unique'
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
     var a=userInput[0];
     var b=userInput[1].split(" ");
     var count=0;
     var x=[];
     for(var i=0;i<b.length;i++)
     {
         for(var j=i+1;j<b.length;j++)
         {
             if(b[i]==b[j])
             {
             x.push(b[i]);
             count=count+1;
             }
         }
     }
    if(count===0)
    console.log("unique");
    else
    console.log(x[0]);
     });
