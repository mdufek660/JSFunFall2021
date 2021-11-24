/**
 * CHALLENGE!
 * Write a function called guessingGame which takes in one parameter amount.
 * The function should return another function that takes in a parameter called guess.
 * In the outer function, you should create a variable called answer which is
 * the result of a random integer between 0 and 10 as well as a variable called guesses which should be set to 0.
 *
 * In the inner function, if the guess passed in is the same as the random integer (defined in the outer function),
 * you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
 *
 * You will have to make use of closure to solve this problem.
 *
 * @example (yours might not be like this, since the answer is random every time):
 *
 * let guessRound1 = guessingGame(5); // Allowing only 5 guesses
 * guessRound1(1); // "You're too low!"
 * guessRound1(8); // "You're too high!"
 * guessRound1(5); // "You're too low!"
 * guessRound1(7); // "You got it!"
 *
 * let guessRound2 = guessingGame(3); // Allowing only 3 guesses
 * guessRound2(5); // "You're too low!"
 * guessRound2(3); // "You're too low!"
 * guessRound2(1); // "No more guesses. The answer was 0"
 */

const guessingGame = (numberOfRounds) => {
  const randomNumber = Math.floor(Math.random()*11)
  const numberOfGuessesAllowed = numberOfRounds;
  const tooLow = "You're too low!"
  const tooHigh= "You're too high!"
  

  let guesses=[];
  let numberOfGuesses=0;
  let gotIt=false;

  let guesser=(input)=>{
    let returnString="";
        console.log("Guessing: "+input+"\nAgainst: "+randomNumber)
        numberOfGuesses++;
        if(input>randomNumber)
        {
          returnString=tooHigh;
        }
        else if(input<randomNumber)
        {
          returnString=tooLow
        }
        else{returnString="You got it!"; gotIt=true;}
        
        if(!gotIt && numberOfGuesses >= numberOfGuessesAllowed){
          returnString=("No more guesses. The answer was "+randomNumber);
        }
        return returnString
  }
  return guesser;
};

// IGNORE THIS BELOW. It is for the tests.

export { guessingGame };