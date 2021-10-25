let num = 8; // e.g.

/**
 * Create a variable called "isEven". (Do not use var.)
 * If "num" is even, "isEven" should be true.
 * Otherwise, "isEven" should be false.
 * Your answer should still work when "num" is a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Solution 1
let isEven;
if (num % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

let isEven = false;
if (num % 2 === 0) {
  isEven = true;
}

// Solution
let isEven = num % 2 === 0;
