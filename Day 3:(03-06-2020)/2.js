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

// 2.6 Return median of two sorted arrays of same size

// declare a set values in two sorted array
var array1 = [1,2,3,4,5,6,7]; 
var array2 = [7,6,5,4,3,2,1];
// declare anonymous function with the variable name of medianOf2
var medianOf2 = function(array1,array2)
{
    var a=array1[Math.round((array1.length/2)-1)];
    var b=array2[Math.round((array2.length/2)-1)];
 // print the median of two sorted arrays of same size
    console.log((a+b)/2);
}
medianOf2(array1,array2);

// 2.7. Remove duplicates from an array
 
// declare a set values in an array
var array=[1,2,2,3,4,5,5,6,7,7];
// declare anonymous function with the variable name of duplicate
var duplicate=function(array){
    var result=[...new Set(array)];
    console.log( result);
};
// print the array without duplicate elements
duplicate(array);

// 2.8. Rotate an array by k times and return the rotated array

// declare a set values in an array
var array =[1,2,3,4,5,6,7];
// number of rotation denoted by the variable name as rotation
var rotation=2;
// declare anonymous function with the variable name of Kthrotation
var Kthrotation=function(array)
{
    for(var i=0;i<rotation;i++)
    {
        var result=array.shift();
        array.push(result);
        }
    return array;
}
// print the rotated array as output
console.log(Kthrotation(array));
