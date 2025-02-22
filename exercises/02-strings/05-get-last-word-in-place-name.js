const place = "New Jersey"; // e.g.

/**
 * Create a constant or variable called "newPlace". It should use "place" above and it should be equal to the last part of a place name.
 * This should still work when place is equal to a different city, like "New Mexico" or "San Diego".
 *
 * @example
 * If "place" is equal to "New Jersey",
 * "newPlace" should equal "York"
 *
 * If "place" is equal to "New Mexico",
 * "newPlace" should equal "Mexico"
 *
 * If "place" is equal to "San Diego",
 * "newPlace" should equal "Diego"
 */

// WRITE YOUR ANSWER BELOW THIS LINE


//assuming that it is always the last word, and not all but the first (ie "I Am Here" should return "Here" and not "Am Here")
let tempArray = place.split(" ");
let newPlace=tempArray.at(-1);