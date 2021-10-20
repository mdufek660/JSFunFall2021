import { getAnswer } from "../getAnswer.js";

const printGreetingStr = getAnswer(
  "../exercises/04-functions/01-print-greeting.js"
);
const timesFiveStr = getAnswer("../exercises/04-functions/02-times-five.js");
const lowerCaseStringStr = getAnswer(
  "../exercises/04-functions/03-lower-case-string.js"
);
const isEvenOrOddStr = getAnswer(
  "../exercises/04-functions/04-is-even-or-odd.js"
);
const countNumberOfDigitsStr = getAnswer(
  "../exercises/04-functions/05-count-number-of-digits.js"
);

const functions = Object.entries({
  printGreeting: printGreetingStr,
  timesFive: timesFiveStr,
  lowerCaseString: lowerCaseStringStr,
  isEvenOrOdd: isEvenOrOddStr,
  countNumberOfDigits: countNumberOfDigitsStr,
}).reduce((acc, [name, str]) => {
  const fn = eval(`() => {
    ${str};
    try {
      return ${name};
    } catch (err) {}
  }`);
  acc[name] = fn();
  return acc;
}, {});

export default functions;
