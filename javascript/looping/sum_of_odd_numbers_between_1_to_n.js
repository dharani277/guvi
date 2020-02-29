// Write a program to find sum of all odd numbers between 1 to n
var odd=prompt("enter the number");
var sum=0;
for(var i=1;i<=odd;i++)
{
    if(i%2!=0)
        sum=sum+i;
}
console.log(sum);
