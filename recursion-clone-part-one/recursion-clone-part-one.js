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
  //debugger;
  let newCopyArr = [];
  for(let i = 0; i < array.length; i++) {
    let individualArrayEle = array[i];
    //console.log(individualArrayEle);
    if(individualArrayEle.length > 1) {
      //debugger;
      newCopyArr.push(copyArray(individualArrayEle));
    } else {
      newCopyArr.push(individualArrayEle);
    }
  }
  return newCopyArr;
  //return JSON.stringify(newCopyArr);
};

var array1 = [ [ "a" ], [ "b" ], [ "c" ], [ "d", ["e"] ], [ "f" ] ];
var array2 = copyArray(array1);
console.log(array2); // [ [ "a" ], [ "b" ], [ "c" ], [ "d", ["e"] ], [ "f" ] ];
console.log(array1 === array2); // false
console.log(array1[3] === array2[3]); // false
