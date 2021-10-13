import { getAnswer } from "../getAnswer.js";

const isEqualStr = getAnswer("../exercises/03-conditionals/01-is-equal.js");

const isNotEqualStr = getAnswer(
  "../exercises/03-conditionals/02-is-not-equal.js"
);

const isTeenagerStr = getAnswer(
  "../exercises/03-conditionals/03-is-teenager.js"
);

const isWeekendStr = getAnswer("../exercises/03-conditionals/04-is-weekend.js");

const isLargerNumberStr = getAnswer(
  "../exercises/03-conditionals/05-is-larger-number.js"
);

const switchStr = getAnswer("../exercises/03-conditionals/07-switch.js");

const isEvenStr = getAnswer("../exercises/03-conditionals/06-is-even.js");

export const isEqual = eval(`(userInput1, userInput2) => {
  ${isEqualStr}
  return isEqual;
}`);

export const isNotEqual = eval(`(targetBMI, actualBMI) => {
  ${isNotEqualStr}
  return isNotAtGoalWeight;
}`);

export const isTeenager = eval(`(age) => {
  ${isTeenagerStr}
  return isTeenager;
}`);

export const isWeekend = eval(`(day) => {
  ${isWeekendStr}
  return isWeekend;
}`);

export const isLargerNumber = eval(`(num1, num2) => {
  ${isLargerNumberStr}
  return isLargerNumber;
}`);

export const isEven = eval(`(num) => {
  ${isEvenStr}
  return isEven;
}`);

export const switchProblem = eval(`(monthNum) => {
  ${switchStr}
  return monthText;
}`);
