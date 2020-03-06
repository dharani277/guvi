// print odd numbers in an array
var a=[1,2,3,4,5,6,7,8,9,10];
var b=function(a)
{
for(var i=0;i<a.length;i++)
{
 if(a[i]%2!==0)
{
s+=a[i]+" "
}
}
return s
}
var s=""
console.log(b(a));
