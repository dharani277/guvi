// Write a program to enter a number and print its reverse
var a=prompt("enter the number"); 
var t=a;
var rev=0;
while(t>0)
{
rem=t%10;
rev=rem+rev*10;
t=Math.floor(t/10);
}
console.log(rev);
