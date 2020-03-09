/*

Implement the function copyArray which has the following behavior
1. copyArray makes a deep clone of an array, regardless of how many levels of nesting there is
2. copyArray creates a new copy of every element to the max level of nesting
3. copyArray uses the recursion pattern

var array1 = [ [ "a" ], [ "b" ], [ "c" ], [ "d", ["e"] ], [ "f" ] ];
var array2 = copyArray(array1);
console.log(array2); //[ [ "a" ], [ "b" ], [ "c" ], [ "d", ["e"] ], [ "f" ] ]
array1 === array2 // returns false, because you've made a deep copy successfully
array1[3] === array2[3] // also returns false, because you've made a deep copy successfully

*/


var copyArray = function(array) {
  // Your code here.
};
