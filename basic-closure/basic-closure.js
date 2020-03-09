/*
basic-closure:
Implement the function makePlusOne.

* makePlusOne only has one parameter, x, which you can assume is an integer.
* makePlusOne MUST RETURN A FUNCTION EXPRESSION which, when invoked, starts from x and then adds one each time it is invoked.
* The function expression returned by makePlusOne must take no parameters while preforming the above.

var startAtSixteen = makePlusOne(16);

startAtSixteen() // -> returns 17
startAtSixteen() // -> returns 18
startAtSixteen() // -> returns 19

*/

/* //makePlusOne function has one parameter, x , which is an integer
var makePlusOne = function(x) {
  // Create a variable incrementNumByOne and initilize it to x
  var incrementNumByOne = x;
  // makePlusOne function is expected to return a function, so returning an anonymous function
  return function() {
    // this is a closure function, since it can access the outer function variables
    // here we are incrementing the incrementNumByOne by 1 every time the function is invoked
    incrementNumByOne += 1;
    //return the variable incrementNumByOne
    return incrementNumByOne;
  }
}; */

// same as above except that I am trying to use an arrow function
var makePlusOne = (x) => {
  // Create a variable incrementNumByOne and initilize it to x
  var incrementNumByOne = x;
  // makePlusOne function is expected to return a function, so returning an anonymous function
  return () => {
    // this is a closure function, since it can access the outer function variables
    // here we are incrementing the incrementNumByOne by 1 every time the function is invoked
    incrementNumByOne += 1;
    //return the variable incrementNumByOne
    return incrementNumByOne;
  }
};

var startAtSixteen = makePlusOne(16);
console.log(startAtSixteen()); // returns 17
console.log(startAtSixteen()); // returns 18
console.log(startAtSixteen()); // returns 19
