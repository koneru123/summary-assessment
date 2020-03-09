$(function() {
  // YOUR CODE HERE
  // Do **_not_** use a separate closure variable to keep track of the count.
  // You must use jQuery to access the current count in the div every time you wish to modify it
  // If it is convenient, you can assign the count value read via jQuery to a variable within the function that reads and modifys it's value
  // we need to make sure this script runs after the DOM is loaded and ready
  $(document).ready(function() {
    // trying to access the upvote button via className .upvote and adding a click event handler
    $('.upvote').click(function() {
      // trying to access the count value and assigning it to a countValue variable
      $incCountValue = $('.count').text();
      // incrementing the count by one on click
      $incCountValue++;
      // update the count value once incremented
      $('.count').text($incCountValue);
    });
    // trying to access the downvote button via className .downvote and adding a click event handler
    $('.downvote').click(function() {
      // we need to get the current count and assigning it to a variable
      $decCountValue = $('.count').text();
      // decrementing the count by one on click
      $decCountValue--;
      // update the count value once decremented
      $('.count').text($decCountValue);
    })
  });
});