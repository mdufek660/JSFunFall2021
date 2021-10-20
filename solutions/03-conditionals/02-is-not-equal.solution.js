let targetBMI = 24; // e.g.
let actualBMI = 27; // e.g.

/**
 * Create a variable called "isNotAtGoalWeight". (Do not use var.)
 * If "targetBMI" equals "actualBMI", then "isNotAtGoalWeight" should be false.
 * If "targetBMI" does not equal "actualBMI", "isNotAtGoalWeight" should be true.
 * Your answer should still work when "targetBMI" and "actualBMI" are different values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Solution 1
let isNotAtGoalWeight;
if (targetBMI === actualBMI) {
  isNotAtGoalWeight = false;
} else {
  isNotAtGoalWeight = true;
}

// Solution 2
let isNotAtGoalWeight = targetBMI !== actualBMI;
