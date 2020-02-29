// Write a program to calculate sum of digits of a number
var a=prompt("enter the number"); 
var t=a; 
var sum=0; 
while(t>0)
{
r=t%10; 
sum=sum+r;
t=Math.floor(t/10);
} 
console.log(sum);
