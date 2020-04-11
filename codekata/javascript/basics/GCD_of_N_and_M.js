// Given 2 numbers N,M find the GCD of N and M.If it cannot be found for given number(s) then print -1
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
    var a=[],count=0;
    a=data.split(' ');
    var x=a[0]
    var y=a[1]
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) 
  {
    var t = y;
    y = x % y;
    x = t;
    count=1;
  }
  if(count>0)
  {
console.log(t);
  }
else{
    console.log('-1');
}
});
