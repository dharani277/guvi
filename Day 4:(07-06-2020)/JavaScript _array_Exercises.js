// 1 - Chunk

// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

const chunk =(array,size) => 
    array.reduce((element,_, i) =>
        i % size === 0 ? [...element, array.slice(i, i + size)] : element, []);
console.log( chunk([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15],5) );

// 2 - compact(array)

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function compact(array) {
  return array.filter((value) => {
    return !!value;
  });
}
console.log(compact([0,  1, false,  2,  '',  3]));

// 3 - flatconcat

// Creates a new array concatenating and flattens array a single level deep. with any additional arrays and/or values.

const array = [[1],  2, [3], [[4]]];
function flatconcat(array, a = 1) {
   return  a> 0 ? array.reduce((input, value) => input.concat(Array.isArray(value) ? flatconcat(value, a - 1) : value), [])
                : array.slice();
    };
console.log(flatconcat(array,Infinity));

// 4 - drop

// Creates a slice of array with n elements dropped from the beginning.

var drop = [1,2,3,4,5];
console.log(drop.slice([3]));

// 5 - dropRight

// Creates a slice of array with n elements dropped from the end.

var dropRight = [1,2,3]; 
console.log(dropRight.reverse().slice(0).reverse());

// 6 - dropWhile

// Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

// 9 - flattenDepth

// Recursively flatten array up to depth times.

// 10 - fromPairs

// this method returns an object composed from key-value pairs.
