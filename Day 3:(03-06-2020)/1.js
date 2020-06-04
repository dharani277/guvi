// Write a function called “addFive”. Given a number, “addFive” returns 5 added to that number.

// assign a value for num 
var num = 5;
// declare function with the name of addFive 
function addFive(num) { 
if(num>0)
return num+5;
else
return num-5;
}
var result = addFive(num); 
// print the result value
console.log(result);

// Write a function called “getOpposite”. Given a number, return its opposite

// assign a value for num
var num = 5;
// declare function with the name of getOpposite
function getOpposite(num) {
    return -num;
}
var result = getOpposite(num);
// print the result value
console.log(result);

// Fill in your code that takes an number minutes and converts it to seconds.

// assign a value for min
var min = 5;
// declare function with the name of toSeconds
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min);
// print the secs value 
console.log(secs);

// Create a function that takes a string and returns it as an integer.

// assign a value for mystr
var mystr = "5";
// declare function with the name of toInteger
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr)
// print the myint value 
console.log(myint);

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// assign a value for myint
var myint = 0;
// declare function with the name of nextNumber
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint);
// print the myNextint value 
console.log(myNextint);

// Create a function that takes an array and returns the first element.

// assign a value for arr
var arr = [1, 2, 3];
// declare function with the name of getFirstElement
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
// print the data value with get first element
console.log(data);

// Convert Hours into Seconds. Write a function that converts hours into seconds.

// assign a value for arr
var arr = [1, 2, 3];
var result=[];
// declare function with the name of hourToSeconds
function hourToSeconds(arr) {
    for(var i=0;i<arr.length;i++)
    {
        result.push(arr[i]*3600);
    }
    return result;
}
var data = hourToSeconds(arr);
// print the data value with hour to seconds
console.log(data);

// Find the Perimeter of a Rectangle. Create a function that takes height and width and finds the perimeter of a rectangle.

// declare function with the name of findPerimeter
function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
var peri = findPerimeter(6,7);
// print the peri value with perimeter of a rectangle
console.log(peri);

// Less Than 100? Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. 

// declare function with the name of lessThan100
function lessThan100(num1,num2) {
  var sum=num1+num2;
    if(sum<100)
    return true;
    else
    return false;
}
var res = lessThan100(22,15);
// print the res value with less than 100
console.log(res);

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// declare function with the name of remainder
function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3);
// print the res value 
console.log(res);

// Old macdonald had a farm: MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species: turkey = 2 legs horse = 4 legs pigs = 4 legs The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// declare function with the name of CountAnimals
function CountAnimals(tur,horse,pigs) {
    var sum=tur*2+horse*4+pigs*4;
    return sum;
}
var legs = CountAnimals(2,3,5);
// print the number of legs
console.log(legs);

// Frames Per Second Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// declare function with the name of frames
function frames(num1,num2) {
    return (num1*num2)*60;
}
var fps = frames(1,2);
// print the frames value
console.log(fps);

// Check if an Integer is Divisible By Five Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

// declare function with the name of divisibleByFive
function divisibleByFive(num1) {
if(num1%5===0)
return true;
else
return false;
}
var divisible = divisibleByFive(5);
// print the divisibleByFive value
console.log(divisible);

// Write a function called “isEven”. Given a number, “isEven” returns whether it is even.

// // declare function with the name of isEven
function isEven(num){
 if(num%2===0)
 return true;
 else 
 return false;
}
var even = isEven(5);
// print the even value with the number is even or not
console.log(even);

// Write a function called “areBothOdd”. Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// declare function with the name of areBothOdd
function areBothOdd(num1, num2){
 if(num1%2!==0 && num2%2!==0)
 return true;
 else
 return false;
}
var  result = areBothOdd(2,3);
// print the result value with both numbers are odd or not
console.log(result);

// Write a function called “getFullName”. Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

// declare function with the name of getFullName
function getFullName(firstName, lastName){
    var arr=[];
    arr.push(firstName, lastName);
 return arr.join(' ');
}
var  result = getFullName("GUVI", "GEEK");
// print the result value with full name
console.log(result);

// Write a function called “getLengthOfWord”. Given a word, “getLengthOfWord” returns the length of the given word.

// declare function with the name of getLengthOfWord
function getLengthOfWord(word1){
    if(word1>=0)
    return -1;
    else
 return word1.length;
}
var  result = getLengthOfWord("GUVI");
// print the result value, length of the word1
console.log(result);

// Write a function called “isSameLength”. Given two words, “isSameLength” returns whether the given words have the same length.

// declare function with the name of isSameLength
function isSameLength(word1, word2){
 if(word1.length==word2.length)
 return true;
 else
 return false;
}
var  result = isSameLength("GUVI","GEEK");
// print the result value, length of two words is same or not
console.log(result);

// Create a function to calculate the distance between two points defined by their x, y coordinates

// declare function with the name of getDistance
function getDistance(x1, y1, x2, y2)
{
 return Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));
 }
var  result = getDistance (100, 100, 400, 300);
// print the result with distance value
console.log(result);

// Write a function called “getNthElement”. Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

// declare function with the name of getNthElement
function getNthElement(array,n){
 if(array.length==0)
 return undefined;
 else
 return array[n];
}
var result = getNthElement([1, 3, 5], 1);
// print the result value with get Nth element in an array
console.log(result);

// Write a function called “getLastElement”. Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.

// declare function with the name of getLastElement
function getLastElement(array){
 if(array.length==0)
 return -1;
 else
 return array[array.length-1];
}
var result=getLastElement([1, 2, 3, 4]);
// print the result value with last element in an array
console.log(result);

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

// declare function with the name of getPositives
function getPositives(ar)
{
    for(var i=0;i<ar.length;i++)
    {
if(ar[i]>=0)
{
    ar2.push(ar[i]);
}
}
return ar2;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2=[];
ar2 = getPositives(ar);
// print the ar2 value with positive numbers in an array
console.log(ar2);

// Reverse a string

var s = reverseString("JavaScript");
// declare function with the name of reverseString
function reverseString(s)
{
    return s.split("").reverse().join("");
}
// print the s value with reverse string 
console.log(s);

// Find the maximum number in an array of numbers

// declare function with the name of findMax
function findMax(ar)
{
return ar.sort();
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
findMax(ar);
// print the maximun number in an array
console.log("Max:",ar[ar.length-1]);

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

// declare function with the name of powerOfTwo
function powersOfTwo(n){
    var res=[];
    for(var j=0;j<=n;j++)
    {
    var output=Math.pow(2,j);
    res.push(output);
    }
// print the res value
  console.log(res.join(","))
  return res;
}
powersOfTwo(2);

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// declare function with the name of countPositivesSumNegatives
function countPositivesSumNegatives(arr) {
    var positive=arr.filter((number)=>number>0);
    var negative=arr.filter((number)=>number<0);
    return [positive.length,negative.reduce((a, b) => a + b)]
}
var ar2=countPositivesSumNegatives(arr);
// print the ar2 values
console.log(ar2);

// Write a function called “getProperty”. Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
 mykey: 'value'
};
// declare function with the name of getProperty
function getProperty(obj, key) {
    if(typeof(obj[key])=="undefined")
    return undefined;
    else
    return obj[key];
}
// return the value of the property at the given key.
console.log(getProperty(obj,'mykey'));

// Write a function called “addProperty”. Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

var obj = {
 mykey: 'value'
};
// declare the function with the name of addProperty
function addProperty(obj, key){
    return obj[key]=true;
}
addProperty(obj,"myProperty");
// return the new property on the given object with a value of true
console.log(obj);

// Write a function called “removeProperty”. Given an object and a key, “removeProperty” removes the given key from the given object.

// declare the function with the name of removeProperty
function removeProperty(obj, key){
    delete obj[key];}
removeProperty(obj, 'mykey');
// print the obj value
console.log(obj)

// Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 //Some piece of code goes here 
 result=ar1.concat(ar2);
 return result;
}
