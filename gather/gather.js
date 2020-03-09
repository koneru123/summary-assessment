/*

gather
Implement the gather function

 The gather function turns a one-dimensional collection into an object with multiple collections.
* The gather function turns a one-dimensional collection into an object with multiple collections.
* Each key of the object returned by gather is a result from running a collection item through the iteratee
* Each value of the object returned by gather is an array of original collection items that return that key's value when passed as input to the iteratee
* If iteratee is a string instead of a function, the collection items are gathered by the property named by iteratee on each of the values.

Example:
  var nums = [1.55, 2.42, 2.66];

  var truncate = function(val) {
    return Math.floor(val);
  }

gather(nums, truncate) // returns { 1: [1.55], 2: [2.42, 2.66] }

var pets = ['dog', 'rat', 'possum'];

gather(pets, 'length') // returns { 3: ['dog', 'rat'], 6: ['possum'] }
*/

//Algorithm
// - Defined truncate call back function
// - gather function can have 2 arguments (collection and iteratee)
// - we first need to check whether it has iteratee or not
// - then we need to check if collection is an array
// - then loop through the collection
// - check if individual collection item is number or string
// - If it does not have iteratee argument we need make sure our object returns the correct key and value by manually doing the implementation
// - if it does have iteratee argument then we can pass our individual collection item to that iteratee function to generate the right key and value
// - once we get the right value, we push it to an array and map it to the right key
// return the new object
// we could create helper functions for this implementation

var truncate = function(val) {
  return Math.floor(val);
}

var gather = function(collection, iteratee) {
  let gatherObj = {};
  if(arguments.length === 1) {
    if(Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
        if(typeof(collection[i]) === 'number') {
          if(gatherObj[Math.floor(collection[i])]) {
            gatherObj[Math.floor(collection[i])].push(collection[i]);
          } else {
            gatherObj[Math.floor(collection[i])] = [];
            gatherObj[Math.floor(collection[i])].push(collection[i]);
          }
        } else if(typeof(collection[i]) === 'string') {
          if(gatherObj[collection[i].length]) {
            gatherObj[collection[i].length].push(collection[i]);
          } else {
            gatherObj[collection[i].length] = [];
            gatherObj[collection[i].length].push(collection[i]);
          }
        }
      }
    }
  } else {
    if(Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
        if(typeof(collection[i]) === 'number') {
          if(gatherObj[iteratee(collection[i])]) {
            gatherObj[iteratee(collection[i])].push(collection[i]);
          } else {
            gatherObj[iteratee(collection[i])] = [];
            gatherObj[iteratee(collection[i])].push(collection[i]);
          }
        } else if(typeof(collection[i]) === 'string') {
          if(gatherObj[collection[i].length]) {
            gatherObj[collection[i].length].push(collection[i]);
          } else {
            gatherObj[collection[i].length] = [];
            gatherObj[collection[i].length].push(collection[i]);
          }
        }
      }
    }
  }
  return gatherObj
  //return JSON.stringify(gatherObj);
}

var nums = [1.55, 2.42, 2.66];
var pets = ['dog', 'rat', 'possum'];
console.log(gather(pets)); // returns { 3: ['dog', 'rat'], 6: ['possum'] }
console.log(gather(nums)); // returns { 1: [1.55], 2: [2.42, 2.66] }
console.log(gather(pets, 'length')); // returns { 3: ['dog', 'rat'], 6: ['possum']}
console.log(gather(nums, truncate)); // returns { 1: [1.55], 2: [2.42, 2.66] }
