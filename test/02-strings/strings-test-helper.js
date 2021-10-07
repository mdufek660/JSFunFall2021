import { getAnswer } from "../getAnswer.js";

const stringLengthStr = getAnswer(
  "../exercises/02-strings/03-string-length.js"
);
const getLastWordInPlaceNameStr = getAnswer(
  "../exercises/02-strings/05-get-last-word-in-place-name.js"
);

const convertStringToIntAnswer = getAnswer(
  "../exercises/02-strings/01-convert-string-to-int.js"
);

const getTheCharacterPositionAnswer = getAnswer(
  "../exercises/02-strings/02-get-the-character-position.js"
);

const getLastCharacterAnswer = getAnswer(
  "../exercises/02-strings/04-get-last-character.js"
);

const replaceLastNameAnswer = getAnswer(
  "../exercises/02-strings/06-replace-last-name.js"
);

const capitalizeLastNameAnswer = getAnswer(
  "../exercises/02-strings/07-capitalize-last-name.js"
);

export const stringLength = eval(`(str) => {
  ${stringLengthStr}
  return strLength;
}`);

export const getLastWordInPlaceName = eval(`(place) => {
  ${getLastWordInPlaceNameStr}
  return newPlace;
}`);

export const convertStringToInt = eval(`(answer) => {
  ${convertStringToIntAnswer}
  return answer;
}`);

export const getTheCharacterPosition = eval(`(firstName, letter) => {
  ${getTheCharacterPositionAnswer}
  return characterPosition;
}`);

export const getLastCharacter = eval(`(str) => {
  ${getLastCharacterAnswer}
  return lastCharacter;
}`);

export const replaceLastName = eval(`(fullName, newLastName) => {
  ${replaceLastNameAnswer}
  return fullName;
}`);

export const capitalizeLastName = eval(`(fullName) => {
  ${capitalizeLastNameAnswer}
  return fullName;;
}`);
