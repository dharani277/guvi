// Write a program to find sum of all even numbers between 1 to n
var even=prompt("enter the number");
var sum=0;
for(var i=1;i<=even;i++)
{
    if(i%2==0)
    sum=sum+i;
}
console.log(sum);
