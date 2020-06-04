// 3. Write a callback which is called

// 3.1. if the give number is even

// declare a set of values to an array
var array=[1,2,3,4,5,6,7,8,9,10];
var result=[];
// declare function with the name of evenNumber by using call back 
function evenNumber(array,callback){ 
    for(var i=0;i<array.length;i++)
    {
        if(array[i]%2===0)
    result.push(array[i]);
    }
    callback(); 
    }
    function even(){ 
   console.log(result); 
   } 
 evenNumber(array,even);     
   
// 3.2. if the given number is prime

// declare a set of values to an array
var array = [2,3,4,5,6,7,8,9,10,11,12];
var result;
// declare function with the name of primeNumber by using call back
function primeNumber(array,callback){ 
 result= array.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) 
  {
    if (number % i === 0) 
    return 0;
  }
  return 1;
});
    callback(); 
    }
    function prime(){ 
   console.log(result); 
   } 
 primeNumber(array,prime);     
   
// 3.3. if the number is palindrome

// declare a set of strings to an array
var array=["i","love", "my","dad"];
var palindrome;
// declare function with the name of primeNumber by using call back
function primeNumber(array,callback){ 
palindrome = array.filter((number)=>{
var result=number.split("").reverse().join('');
    for(var i=0;i<array.length;i++){
    if(result==array[i])
    return result;
}
  });
    callback(); 
    }
    function pal(){ 
   console.log(palindrome); 
   } 
 primeNumber(array,pal);     
