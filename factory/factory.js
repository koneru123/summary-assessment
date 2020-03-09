/*
Implement the function factory

1. The function named factory MUST return a function that behaves in the following way:
2. When called with no arguments before a value has been stored, the default 'HI IM THE DEFAULT :D!' is returned.
3. When called with one argument, the value is stored AND returned.
4. When called with no arguments after a value has been stored, the stored value is returend.

Example:
var getSet = factory();
getSet() // returns 'HI IM THE DEFAULT! :D'
getSet('Something else') // returns 'Something else'
getSet() // returns 'Something else'
getSet(42) // returns 42
getSet() // returns 42
*/
var factory = function() {
  // create a new variable value
  var value;
  // factory function is expected to return a function.
  return function() {
    // console.log(arguments);
    // console.log('arguments' + arguments[0]);
    // here we are checking the length of function arguments, > 0 means there is a passed in argument
    if(arguments.length > 0) {
      // inner function has access to outer function variable, so this function has access to value
      // we assign the value to the first argument
      value = arguments[0];
      // we return the value
      return value;
      // incase if there are no arguments passed in
    } else if (arguments.length === 0) {
      //debugger
      // we also need to check if there is any value
      if(!value) {
        // debugger
        // if no value, then we set the default text
        value = 'HI IM THE DEFAULT! :D';
        // then return the value
        return value;
      } else {
        // incase if there is a value set then we return that value
        return value;
      }
    }
  }
};

var getSet = factory();
console.log(getSet()); // returns 'HI IM THE DEFAULT! :D'
console.log(getSet('Something else')); // returns 'Something else'
console.log(getSet()); // returns 'Something else'
console.log(getSet(42)); // returns 42
console.log(getSet()); // returns 42
