// Write a program to calculate product of digits of a number
var a=prompt("enter the number"); 
var t=a; 
var mul=1;
while(t>0)
{
r=t%10; 
mul=mul*r;
t=Math.floor(t/10);
} 
console.log(mul);
