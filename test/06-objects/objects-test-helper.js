import { getAnswer } from "../getAnswer.js";

const createDogObjectStr = getAnswer(
  "../exercises/06-objects/01-create-object.js"
);

import createGraduateObject from "../../exercises/06-objects/02-create-nested-object.js";

const accessAnItemObjectStr = getAnswer(
  "../exercises/06-objects/03-accessing-item-in-object.js"
);

const updateStudentObjectStr = getAnswer(
  "../exercises/06-objects/04-update-object.js"
);

import returnObjectValues from "../../exercises/06-objects/05-return-object-values.js";

import generateLinks from "../../exercises/06-objects/06-loop-through-object.js";

import combineObjects from "../../exercises/06-objects/07-combine-object.js";

export const createDogObject = eval(`() => {
  ${createDogObjectStr}
  return myDog;
}`);

export const accessAnItemObject = eval(`(clothes) => {
  ${accessAnItemObjectStr}
  return hat;
}`);

export const updateStudentObject = eval(`(student) => {
  ${updateStudentObjectStr}
  return student;
}`);

export {
  createGraduateObject,
  returnObjectValues,
  generateLinks,
  combineObjects,
};
