import { expect } from "chai";
import {
  stringLength,
  getLastWordInPlaceName,
  convertStringToInt,
  getTheCharacterPosition,
  getLastCharacter,
  replaceLastName,
  capitalizeLastName,
} from "./strings-test-helper.js";

describe("2. Strings", () => {
  describe("01-convert-string-to-int", () => {
    it('"answer" should be cast as (converted to) an integer', () => {
      expect(convertStringToInt("5")).equal(5);
    });
  });

  describe("02-get-character-position", () => {
    it('should contain a variable or constant "characterPosition" and it should be equal to the index of "letter" within "firstName"', () => {
      expect(getTheCharacterPosition("James", "a")).equal(1);
    });
  });

  describe("03-string-length", () => {
    it('should contain a variable or constant "strLength" and it should count the number of characters within a string "str"', () => {
      expect(stringLength("Javascript")).equal(10);
    });
  });

  describe("04-get-last-character", () => {
    it("should return the last letter of the string", () => {
      expect(getLastCharacter("Marvel")).equal("l");
    });
  });

  describe("05-get-last-word-in-place-name", () => {
    it('should contain a variable "newPlace" equal to the second word within a place name', () => {
      expect(getLastWordInPlaceName("Los Angeles")).equal("Angeles");
    });
  });

  describe("06-replace-last-name", () => {
    it('"fullName" should be equal to a person\'s new name', () => {
      expect(replaceLastName("Gordon Ramsey", "Smith")).equal("Gordon Smith");
    });
  });

  describe("07-capitalize-last-name", () => {
    it('"fullName" should be in title case', () => {
      expect(capitalizeLastName("Jane doe")).equal("Jane Doe");
    });
  });
});
