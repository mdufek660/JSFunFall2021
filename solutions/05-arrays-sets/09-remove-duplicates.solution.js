/**
 * Use sets to remove duplicate elements from an array
 * @param {array} numbers array of numbers
 * @return {array} of numbers where the duplicates have been removed.
 * @example
 * const array = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
 * removeDuplicates(); // [2, 3, 4, 5, 6, 7, 32]
 */

const removeDuplicates = (numbers) => {
  // WRITE YOUR ANSWER HERE
  const mySet = new Set(numbers);
  return [...mySet];
};

// IGNORE THIS BELOW. It is for the tests.

export default removeDuplicates;
