import { expect } from "chai";
import {
  solvingProblems,
  createAnArray,
  accessingAnItem,
  addItemToArray,
  combineArrays,
  add,
  arrayLength,
  highestNumber,
  isPalindrome,
  removeDuplicates,
} from "./arrays-sets-test-helper.js";

describe("5. Arrays & Sets", () => {
  describe("00-solving-problems", () => {
    it("should pass the test", () => {
      expect(solvingProblems("test")).to.equal("test");
    });
  });

  describe("01-create-an-array", () => {
    it('should contain an array called "restaurants"', () => {
      const restaurants = createAnArray();
      expect(restaurants).to.be.an("array");
    });
    it('"restaurants" should have at least 3 items', () => {
      const restaurants = createAnArray();
      expect(restaurants).to.have.lengthOf(3);
    });
  });

  describe("02-accessing-an-item", () => {
    it('should contain a constant called "myCar"', () => {
      const accessingAnItemStr = accessingAnItem.toString();
      expect(accessingAnItemStr).to.match(/const/);
      expect(accessingAnItemStr).to.match(/myCar/);
    });
    it('"myCar" should be equal to the first item in an array', () => {
      const cars = ["Mercedes", "Kia", "Toyota"];
      const myCar = accessingAnItem(cars);
      expect(myCar).to.equal("Mercedes");
    });
  });

  describe("03-add-item-to-array", () => {
    it('"languages" should contain three more items', () => {
      const languages = addItemToArray(["C++"]);
      expect(languages).to.have.lengthOf(4);
    });
  });

  describe("04-combine-arrays-.js", () => {
    it('should contain a new array called "newArray"', () => {
      const newArray = combineArrays(["HTML"], ["CSS"]);
      expect(newArray).to.be.an("array");
    });
    it('"newArray" should merge two arrays into one', () => {
      const newArray = combineArrays(["HTML"], ["CSS"]);
      expect(newArray).to.deep.equal(["HTML", "CSS"]);
    });
    it('"newArray" should combine two arrays by using the spread operator', () => {
      expect(combineArrays.toString().includes("...")).to.equal(true);
    });
  });

  describe("05-add-an-array", () => {
    it('should return a sum of all of the numbers within the array "numbers"', () => {
      expect(add([-1, 0.5, 2, 5])).to.equal(6.5);
    });
  });

  describe("06-array-length", () => {
    it("should return the length of the array supplied as an argument", () => {
      expect(arrayLength([1, 2, 3, 4, 5, 6])).to.equal(6);
    });
  });

  describe("07-highest-number", () => {
    it("should return the highest number in the array", () => {
      const number1 = highestNumber([1, 10, 2, 3, 4]);
      expect(number1).to.equal(10);
      const number2 = highestNumber([-1, -5, -4]);
      expect(number2).to.equal(-1);
    });
  });

  describe("08-is-palidrome", () => {
    it("should return true if a word is a palindrome", () => {
      expect(isPalindrome("rotator")).to.be.equal(true);
      expect(isPalindrome("noon")).to.be.equal(true);
    });
    it("should return false if a word is not a palindrome", () => {
      expect(isPalindrome("difference")).to.be.equal(false);
      expect(isPalindrome("wedding")).to.be.equal(false);
    });
    it("should use split", () => {
      expect(isPalindrome.toString().includes("split")).to.equal(true);
    });
  });

  describe("09-remove-duplicates", () => {
    it("should remove all duplicate values", () => {
      const unique = removeDuplicates([
        2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5,
      ]);
      expect(unique).to.deep.equal([2, 3, 4, 5, 6, 7, 32]);
    });
  });
});
