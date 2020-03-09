/*
  explain your solution to recursion-clone-part-one line by line in written english with comments, for example:

  //define a result variable as an empty array
  var result = [];

*/

// copyArray function makes a deep clone of an array, regardless of how many levels of nesting there is, and the input argument is always an array
var copyArray = function(array) {
  // since the expected output is an array. Lets define a new newCopyArr variable and initialize it to empty array.
  let newCopyArr = [];
  // loop through the array
  for(let i = 0; i < array.length; i++) {
    // lets define a new variable individualArrayEle and initialize it to an individual array element
    let individualArrayEle = array[i];
    // since there could be nested arrays, we need to check the length of individual array element
    if(individualArrayEle.length > 1) {
      // incase if the length of individual array element is greater than 1, we need to recursively call the copyArray function with individualArrayEle as an argument
      // doing this way we can loop through the nested array's
      // then we can push them to the newCopyArr as nested arrays
      newCopyArr.push(copyArray(individualArrayEle));
    } else {
      //incase if the length of individual array element is not greater than 1, we just push the element to the newCopyArr
      newCopyArr.push(individualArrayEle);
    }
  }
  // since we pushed all the elements to the newCopyArr, we now return the newCopyArr
  return newCopyArr;
  //return JSON.stringify(newCopyArr);
};

var array1 = [ [ "a" ], [ "b" ], [ "c" ], [ "d", ["e"] ], [ "f" ] ];
var array2 = copyArray(array1);
// array2 should be a clone of array1
console.log(array2); // [ [ "a" ], [ "b" ], [ "c" ], [ "d", ["e"] ], [ "f" ] ];
// when you try to compare both the arrays they will not be equal even though they have same elements because they are defined at different memory locations
// Array and Object follow pass by reference
console.log(array1 === array2); // false
// since array1[3] and array2[3] are arrays, when we try to compare arrays, they will not be equal even though they have same elements because they are initialized at different memory locations.
// Array and Object follow pass by reference
console.log(array1[3] === array2[3]); // false
