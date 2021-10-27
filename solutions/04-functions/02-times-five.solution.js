/**
 * Create a function named "timesFive". It should multiply a number by 5.
 * @example timesFive(5); // 25
 * @example timesFive(2); // 10
 * @example timesFive(0); // 0
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const timesFive = (number) => {
  return number * 5;
};

const convertTemperature = (faren) =>
{
  return ((faren-32)*5/9)
}


let array = [];
for(let i=0; i<1000; i++){
  array.push(Math.floor(Math.random()*20)+1)
}
console.log(array);