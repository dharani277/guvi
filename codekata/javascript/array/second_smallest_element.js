// Given a number N followed by N elements, find the second smallest element.If it cannot be found then print -1
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
    var t;
    var x=[];
    for(var i=0;i<a;i++)
    {
        for(var j=i+1;j<a;j++)
        {
            if(parseInt(b[i])>parseInt(b[j]))
            {
                t=b[i]
                b[i]=b[j]
                b[j]=t
            }
        }
    }
            if(a==1 || b[1]==b[2])
            console.log("-1");
            else
            console.log(b[1])
});
