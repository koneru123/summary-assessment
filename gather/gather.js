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

var gather = function(collection) {

}
