// Given an array of N elements,find the maximum length of increasing continuous sub-array.If it is not found print '-1'
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
     var c=1;
     var d=1;
     for(var i=1;i<=b.length;i++)
     {
             if(b[i]>b[i-1])
             {
             d=d+1;
             }
             else
             {
                 if(c<d)
                 {
                     c=d;
                 }
                 d=1;
             }
         }
         if(c<d)
         {
             c=d;
         }
         if(c>1)
         {
             console.log(c);
         }
         else
         {
         console.log("-1");
         }
});
