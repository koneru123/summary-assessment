/*
basic-scope

* Do not attempt to run the code
* Replace the FILL_ME_IN answer after each question.
* There are five (5) sub-prompts to answer

*/


// Question 1
/*
After the following code runs, what will be the value of result?

var x = 10;

function outer() {
  x = 20;
  function inner() {
    var x = x + 20;
    return x;
  }
  inner();
}

outer();

var result = x;
*/

// x has a global scope whose value is 10, after the outer function is invoked, x is set to 20 (function scope). Which gets assigned to result
const answerOne = 20;

// Question 2
/*
After the following code runs, what will be the value of myArray?

var myArray = [2, 3, 4, 5];
function doStuff(arr) {
  arr = [];
}

doStuff(myArray);
*/

// nothing changed in the myArray variable, so it should still be the same
const answerTwo = [2, 3, 4, 5];

// Question 3
/*
After the following code runs, what will be the value of result?

var x = 30;

function get () { return x; }
function set (value) { var x = value; }

set(10);
var result = get(20);
*/

// function set does not have a return statement
// when invoking get function with 20 as a parameter it should return 30
const answerThree = 30;

// Question 4
/*
var globalVariable = "Hello world!";

function someFunction(){
  var localVariable = 'Hello local scope!';
  function nestedFunction() {
    var nestedLocalVariable = 'Hello nested local scope!';
  }
}
In the above, someFunction has access to what variables? Put them as strings in an array
example: [ 'globalVariable' ]
*/

const answerFour = [ 'globalVariable', 'localVariable' ];

// Question 5
/*
After the following code runs, what will be the value of result?

var x = 20;

function sub(y) {
  return y - x;
}

function strangeSub(x) {
  return sub(x) + sub(x);
}

var result = strangeSub(14);
*/

const answerFive = -12;
