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
};
