import { expect } from "chai";
import {
  myName,
  fixError,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
} from "./variables-numbers-test-helper.js";

describe("1. Variables and Numbers", () => {
  describe("01-my-name", () => {
    it('should contain a variable "myName" equal to your name', () => {
      const name = myName();
      expect(name).to.be.a("string").to.have.length.greaterThan(1);
    });
  });

  describe("02-fix-error", () => {
    it('"numberOfLikes" should not throw an error and be equal to 58', () => {
      const numberOfLikes = fixError();
      expect(numberOfLikes).to.equal(58);
    });
  });

  describe("03-add", () => {
    it('should contain a variable or constant "sum" equal to the numbers "a" plus "b"', () => {
      const sum = add(5, 5);
      expect(sum).to.equal(10);
    });
  });

  describe("04-age-me-by-a-year", () => {
    it('should use the increment operator to increment the variable "age" by 1', () => {
      expect(ageMeByAYear.toString().includes("++")).equal(true);
      expect(ageMeByAYear(19)).equal(20);
    });
  });

  describe("05-make-me-younger-by-a-year", () => {
    it('should use the decrement operator to decrement the variable "age" by 1', () => {
      expect(makeMeYoungerByAYear.toString().includes("--")).equal(true);
      expect(makeMeYoungerByAYear(18)).equal(17);
    });
  });
});
