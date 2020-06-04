// 2. Do the below programs in anonymous function

// 2.1. Print odd numbers in an array

// assign a value of an array
var array=[1,2,3,4,5,6,7,8,9,10];
var result=[];
var odd=function(array)
{
for(var i=0;i<array.length;i++)
{
 if(array[i]%2!==0)
{
result.push(array[i]);
}
}
return result;
}
// print odd numbers in an array
console.log(odd(array));

// 2.3. Sum of all numbers in an array

// assign a value of an array
var array=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
var add=function(array)
{
for(var i=0;i<array.length;i++)
{
sum=sum+array[i];
}
return sum;
}
// print sum of all numbers in an array
console.log(add(array));

