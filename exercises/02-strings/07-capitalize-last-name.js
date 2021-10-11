let fullName = "John smith"; // e.g.

/**
 * You will change the value of "fullName" below. Capitalize the first letter of the the last name within "fullName". "fullName" below should be equal to your answer.
 *
 * @example
 * let fullName = "John smith"; // e.g.
 * The new value for "fullName" should result in "John Smith".
 *
 * Your answer should still work when "fullName" is equal to a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let tempArray = fullName.split(" ");
let lastName=tempArray[tempArray.length-1];
let lastNameCapitalized=lastName[0].toUpperCase()+lastName.substring(1);
tempArray[tempArray.length-1]=lastNameCapitalized;
fullName=tempArray.join(" ");