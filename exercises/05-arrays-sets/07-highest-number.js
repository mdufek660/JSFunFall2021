/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param {array} numbers array of numbers
 * @returns {number} the highest number that was in the array
 *
 * @example highestNumber([1, 10, 2, 3, 4]) // 10
 * @example highestNumber([-1, -5, -4]) // -1
 *
 */

const highestNumber = (numbers) => {
  let highestNumber = Number.MIN_SAFE_INTEGER;
  for(let i=0; i<numbers.length; i++)
  {
    if(numbers[i]>highestNumber){
      highestNumber=numbers[i];
    }
  }
  return highestNumber
};
// IGNORE THIS BELOW. It is for the tests.

export default highestNumber;
