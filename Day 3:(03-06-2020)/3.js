// 3. Write a callback which is called

// 3.1. if the give number is even

// declare the variable name as number with value
var number=26;
var result;
// declare function with the name of evenNumber by using call back 
function evenNumber(number,callback){ 
        if(number%2===0)
        result="even";
        else
        result="odd";
    callback(); 
    }
    function even(){ 
   console.log(result); 
   } 
 evenNumber(number,even);     
   
// 3.2. if the given number is prime

// declare the variable name as number with value
var number=3;
var result;
// declare function with the name of primeNumber by using call back
function primeNumber(number,callback){ 

  for(var i=2;i<=number;i++)
  { 
    var not=1;
      for(var j=2;j<=i;j++)
      {
        if(i%j===0 && j!==i){
          not=0;
          result="not a prime";
        }
}
  if(not===1){
    result="prime";
      }
  }
  callback();
    }
    function prime(){ 
   console.log(result); 
   } 
 primeNumber(number,prime);        
   
// 3.3. if the number is palindrome

// declare the variable name as string
var string="dad";
var result;
// declare function with the name of palindrome by using call back
function palindrome(string,callback)
{ 
result=string.split("").reverse().join("");
    if(result==string)
    result="palindrome";
    else
    result="not a palindrome";
    callback(); 
    }
    function pal(){ 
   console.log(result); 
   } 
 palindrome(string,pal);     
