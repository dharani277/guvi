// 1 - ChunK

// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

// declare variable with the name of chunk
var chunk =(array,size) => 
    array.reduce((element,_, i) =>
        i % size === 0 ? [...element, array.slice(i, i + size)] : element, []);
// print the chunk value
console.log( chunk([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15],5) );

// 2 - compact(array)

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// declare function with the name of compact
function compact(array) {
  return array.filter((value) => {
    return !!value;
  });
}
// print the compact value
console.log(compact([0,  1, false,  2,  '',  3]));

// 3 - flatconcat

// Creates a new array concatenating and flattens array a single level deep. with any additional arrays and/or values.

// declare the variable with the name of array
var array = [[1],  2, [3], [[4]]];
function flatconcat(array, a = 1) {
   return  a> 0 ? array.reduce((input, value) => input.concat(Array.isArray(value) ? flatconcat(value, a - 1) : value), [])
                : array.slice();
    };
// print the flatconcat value
console.log(flatconcat(array,Infinity));

// 4 - drop

// Creates a slice of array with n elements dropped from the beginning.

// declare the function with the name of dropslice
function dropslice(){
var drop = [1,2,3,4,5];
// print the drop value
console.log(drop.slice([3]));
}
// call the dropslice function
dropslice();

// 5 - dropRight

// Creates a slice of array with n elements dropped from the end.

// declare the function with the name of dropreverse
function dropreverse(){
var dropRight = [1,2,3]; 
// print the dropright value
console.log(dropRight.reverse().slice(0).reverse());
}
// call the dropreverse function
dropreverse();

// 6 - dropWhile

// Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

var result=[];
// declare the function with the name of droprightwhile
function dropRightWhile(array){
	var input=array.filter(function(value){
	    if(value%2!=0)
		result.push(value);
	});
	return result;
}
// print the droprightwhile value
console.log(dropRightWhile([1,2,3,4,5,6,7,8,9,10]));

// 7 - findLastIndex

// This method is like Array.prototype.findIndex except that it iterates over elements of collection from right to left.

var result=[];
// declare the function with the name of findindex
function findindex(array){
	var ind=array.findIndex(function(value,index,array){
		if(value%2==0)
		result.push(value);
});
var  input = (number) =>number ==result[result.length-1];
// print the input value
console.log(array.findIndex(input));
}
// call the findindex function 
findindex([1,2,3,4,5]);

// 8 - flattenDeep

// Recursively flattens array.

// declare the function with the name of flattendeep
function flattenDeep(array){
	return array.flat(Infinity);
}
// print the flattendeep value
console.log(flattenDeep([1, [2, [3, [4]],5]]));

// 9 - flattenDepth

// Recursively flatten array up to depth times.

// declare the function with the name of flattendepth
function flattenDepth( array,value){
	return array.flat(value);
}
// print the flattendepth value
console.log(flattenDepth([1, [2, [3, [4]], 5]]),1);

// 10 - fromPairs

// this method returns an object composed from key-value pairs.

var object={},c=0;
// declare the function with the name of frompairs
function fromPairs(array){
	while(c<array.length){
		var input =array[c];
		object[input[0]]=input[1];
		c++;
	}
	return object;
}
// print the frompairs value
console.log(fromPairs([['a',1],['b',2]]));
