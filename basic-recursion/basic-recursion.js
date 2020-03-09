/*

## basic-recursion

* recursionNumSum takes a nested object as input.
* recursionNumSum returns the sum of all numbers.
* Your function will only be tested with objects that have strings, numbers, or other objects as values.

```javascript
        var example = {
          name: 'Alfred',
          age: 42,
          house: {
            inhabitants: 2,
            address: {
              number: 11,
              city: 'Rochester',
              street: 'Fourth',
              zip: 13555
            }
          }
        }

       recursionNumSum(example); // returns 13610
```

*/

var recursionNumSum = function (object) {
  // Create a variable endResult and assign it to 0 (since expected result is an integer value)
  var endResult = 0;
  // loop through the object for values
  for(let value of Object.values(object)) {
    // check if the datatype of each value is integer
    if(typeof(value) === 'number') {
      // if it is an integer keep adding to the endResult variable
      endResult += value
      // if in case it has nested object as value, check if the datatype of each value is an object
    } else if(typeof(value) === 'object') {
      // call the function(recursionNumSum) recursively with value as a function argument
      // add the result of the recursive function to the endResult value
      endResult += recursionNumSum(value);
    }
  }
  // return the variable endResult
  return endResult;
};

var example = {
  name: 'Alfred',
  age: 42,
  house: {
    inhabitants: 2,
    address: {
      number: 11,
      city: 'Rochester',
      street: 'Fourth',
      zip: 13555
    }
  }
}

console.log(recursionNumSum(example)); // return 13610