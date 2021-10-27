/**
 * Add all of the numbers in an array and return the sum.
 * @param {array} numbers an array of numbers
 * @return {number} the sum of all the numbers in an array
 *
 * @example add([1, 2, 3]); // 6
 */

const add = (numbers) => {
  let sum=0;
  for(let i=0; i<numbers.length; i++){
    sum+=numbers[i];
  }
  return sum;
};
// IGNORE THIS BELOW. It is for the tests.

export default add;
