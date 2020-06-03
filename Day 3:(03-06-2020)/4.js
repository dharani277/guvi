// 4. Do the below programs in arrow functions

// 4.1. Print odd numbers in an array

// declare a set of values in an array
var array=[1,2,3,4,5,6,7,8,9,10,11,12];
// By using arrow function with filter method, find odd numbers in an array 
var oddNumber = array.filter((number)=>{
  return number%2!=0;
});
// print odd numbers in an array
console.log(oddNumber);

// 4.2. Convert all the strings to title caps in a string array

// declare string in an array
var string=["i am dharani"];
// By using arrow function with map method, Convert all the strings to title caps in a string array  
var titlecase = string.map((string)=>{
   var result = string.toLowerCase().split(" ");
    for(var i = 0; i< result.length; i++)
    {
     result[i] = result[i][0].toUpperCase() + result[i].slice(1);
     }
  // print all the strings to title caps in a string array
  console.log(result.join(' '));
   return result;
   });
   
 // 4.3. Sum of all numbers in an array
 
 // declare a set of values in an array and initialize sum is equal to zero
var array=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
// By using arrow function with map method, Sum of all numbers in an array 
var add = array.map((number)=>{
  sum=sum+number;
 });
// print the sum of all numbers in an array
 console.log(sum);
 
 // 4.4. Return all the prime numbers in an array
  



