// You are given an integer N, find if the number is divisible by 4

const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
    
});
inp.on("line",(data)=>{
    if(parseInt(data)%4==0)
    console.log("YES");
    else
    console.log("NO");
  });
