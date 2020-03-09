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

function outer () {
  x = 20;
  function inner () {
    var x = x + 20;
    return x;
  }
  inner();
}

outer();

var result = x;
*/

const answerOne = FILL_ME_IN;

// Question 2
/*
After the following code runs, what will be the value of myArray?

var myArray = [2, 3, 4, 5];
function doStuff(arr) {
  arr = [];
}

doStuff(myArray);
*/

const answerTwo = FILL_ME_IN;

// Question 3
/*
After the following code runs, what will be the value of result?

var x = 30;

function get () { return x; }
function set (value) { var x = value; }

set(10);
var result = get(20);
*/

const answerThree = FILL_ME_IN;

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

const answerFour = [ FILL_ME_IN ];

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

const answerFive = FILL_ME_IN;
