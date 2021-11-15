/**
 * Check to see if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Use the split and join methods to solve this problem.
 * @param  {string}  string
 * @return {boolean} true is a string is a palindrome, false if it is not.
 * @example isPalindrome("eye"); // true
 * @example isPalindrome("nope"); // false
 */

const isPalindrome = (string) => {
  // WRITE YOUR ANSWER HERE
  string=string.toLowerCase()
  let stringArray=string.split("")
  let end = Math.ceil(stringArray.length/2)
  let firstHalf = stringArray.slice(0, end).join("");
  let lastHalf= stringArray.slice(end).reverse().join("");

  if(firstHalf.length==lastHalf.length+1){
    firstHalf = firstHalf.slice(0,-1)
  }
  if(firstHalf==lastHalf){
    return true;
  }
  else{
    return false;
  }
};
// IGNORE THIS BELOW. It is for the tests.
export default isPalindrome;