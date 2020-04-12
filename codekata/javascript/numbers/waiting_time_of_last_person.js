// In a garage the service man takes 10 minutes to service one car.If there are N cars in garage and X is number of minutes after which one person arrives,Calculate how much time last person has to wait in garage.(Print answer in minutes)
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(" ");
    var k=parseInt(b[0]);
    var x=parseInt(b[1]);
    var s=0;
    for(var i=0;i<k-1;i++)
    {
      s+=10;
      s-=x;
     }
    console.log(s);
});
