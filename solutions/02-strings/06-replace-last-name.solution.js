let fullName = "Joe Fernandes"; // e.g.
let newLastName = "Washington"; // e.g.

/**
 * A person just got married and they need their last name replaced. You will change the value of "fullName" below. Replace the last name in "fullName" with "newLastName".
 *
 * @example
 * let fullName = "Emily Rose";
 * let newLastName = "Smith";
 * The new value for "fullName" should result in "Emily Smith".
 *
 * @example
 * let fullName = "Joe Fernandes";
 * let newLastName = "Washington";
 * The new value for "fullName" should result in "Joe Washington".
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const index = fullName.indexOf(" ");
const firstName = fullName.substring(0, index);
fullName = firstName + " " + newLastName;
