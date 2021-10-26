import { getAnswer } from "../getAnswer.js";

import solvingProblems from "../../exercises/05-arrays-sets/00-solving-problems-with-functions.js";

const createAnArrayStr = getAnswer(
  "../exercises/05-arrays-sets/01-create-an-array.js"
);

const accessingAnItemStr = getAnswer(
  "../exercises/05-arrays-sets/02-accessing-item-in-array.js"
);

const addItemToArrayStr = getAnswer(
  "../exercises/05-arrays-sets/03-add-item-to-array.js"
);

const combineArraysStr = getAnswer(
  "../exercises/05-arrays-sets/04-combine-arrays-.js"
);

import add from "../../exercises/05-arrays-sets/05-add-an-array.js";

import arrayLength from "../../exercises/05-arrays-sets/06-array-length.js";

import highestNumber from "../../exercises/05-arrays-sets/07-highest-number.js";

import isPalindrome from "../../exercises/05-arrays-sets/08-is-palidrome.js";

import removeDuplicates from "../../exercises/05-arrays-sets/09-remove-duplicates.js";

export const createAnArray = eval(`() => {
  ${createAnArrayStr}
  return restaurants;
}`);

export const accessingAnItem = eval(`(cars) => {
  ${accessingAnItemStr}
  return myCar;
}`);

export const addItemToArray = eval(`(languages) => {
  ${addItemToArrayStr}
  return languages;
}`);

export const combineArrays = eval(`(array1, array2) => {
  ${combineArraysStr}
  return newArray;
}`);

export {
  solvingProblems,
  add,
  arrayLength,
  highestNumber,
  isPalindrome,
  removeDuplicates,
};
