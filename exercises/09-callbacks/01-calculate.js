/**
 * Perform a calculation on a number.
 * @param {number} num1 number
 * @param {number} num2 number
 * @param {function} callback that performs an operation on two numbers
 * @returns {number} that is the result of a callback
 *
 * callback
 * @param {number} num1 number
 * @param {number} num2 number
 * @returns {number} that is the result of a calculation like add or subtract
 *
 * @example
 * const add = (a, b) => {
 *   return a + b;
 * }
 * const subtract = (a, b) => {
 *   return a - b;
 * }
 * console.log( calculate(5, 10, add) ); // 15
 * console.log( calculate(7, 3, subtract) ); // 4
 */

  const add = (num1,num2) =>{
    return num1+num2;
  }

  const subtract = (num1,num2) =>{
    return num1-num2;
  }

const calculate = (num1, num2, callback) => {
  // WRITE YOUR ANSWER HERE
  
  return callback(num1,num2);
};

// IGNORE THIS BELOW. It is for the tests.

export { calculate };

let kirbyLeft="<('o'<)"
let kirbyMidd="<('o')>"
let kirbyRigh="(>'o')>"

let z=0;
let outString="";
console.log("Lets begin")
while(z<10000){
  if(z%3==1){
    outString=(kirbyLeft+kirbyMidd+kirbyRigh)
  }
  if(z%3==2){
    outString=(kirbyMidd+kirbyRigh+kirbyLeft)    
  }
  if(z%3==0){
    outString=(kirbyRigh+kirbyLeft+kirbyMidd)    
  }
  setTimeout(()=> {console.log(outString);}, 100)
  z++
  console.clear()
}