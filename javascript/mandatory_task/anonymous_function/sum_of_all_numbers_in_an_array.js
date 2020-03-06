// sum of all numbers in an array

var a=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
var b=function(a)
{
for(var i=0;i<a.length;i++)
{
sum=sum+a[i]
}
return sum
}
console.log(b(a));
