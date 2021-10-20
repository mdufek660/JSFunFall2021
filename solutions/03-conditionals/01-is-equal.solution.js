let userInput1 = 39; // e,g,
let userInput2 = "39"; // e,g,

/**
 * Create a variable called "isEqual". (Do not use var.)
 * If "userInput1" strictly equals "userInput2", "isEqual" should be true.
 * Otherwise, it should be false.
 * Hint: What does strictly mean?
 * Your answer should still work when "userInput1" and "userInput2" are different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Solution 1
let isEqual;
if (userInput1 === userInput2) {
  isEqual = true;
} else {
  isEqual = false;
}

// Solution 2
let isEqual = false;
if (userInput1 === userInput2) {
  isEqual = true;
}

// Solution 3
let isEqual = userInput1 === userInput2;
