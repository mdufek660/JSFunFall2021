import { expect } from "chai";
import functions from "./functions-test-helper.js";
const {
  printGreeting,
  timesFive,
  lowerCaseString,
  isEvenOrOdd,
  countNumberOfDigits,
} = functions;

describe("4. Functions", () => {
  describe("01-print-greeting", () => {
    it('should contain a function called "printGreeting" in arrow syntax', () => {
      expect(printGreeting).to.be.a("function");
      expect(printGreeting.toString().includes("=>")).to.equal(true);
    });
    it('"printGreeting" should return "Hello ______!"', () => {
      expect(printGreeting("Tim", "Not Tim")).to.equal("Hello Tim!");
    });
  });
  describe("02-times-five", () => {
    it('should contain a function called "timesFive" in arrow syntax', () => {
      expect(timesFive).to.be.a("function");
      expect(timesFive.toString().includes("=>")).to.equal(true);
    });
    it('"timesFive" should multiply a number by 5', () => {
      expect(timesFive(5)).to.equal(25);
      expect(timesFive(10)).to.equal(50);
      expect(timesFive(2)).to.equal(10);
    });
  });
  describe("03-lower-case-string", () => {
    it('should contain a function called "lowerCaseString" in arrow syntax', () => {
      expect(lowerCaseString).to.be.a("function");
      expect(lowerCaseString.toString().includes("=>")).to.equal(true);
    });
    it('"lowerCaseString" should lower case a string', () => {
      expect(lowerCaseString("HELLO WORLD")).to.equal("hello world");
    });
    it('"lowerCaseString" should not throw an error is given a value that is not a string. (NOTE that this test will pass if you have not solved this problem yet.)', () => {
      const goodFn = () => lowerCaseString(null);
      expect(goodFn).to.not.throw();
      expect(lowerCaseString()).to.not.be.ok;
      expect(lowerCaseString(null)).to.not.be.ok;
    });
  });
  describe("04-is-even-or-odd", () => {
    it('should contain a function called "isEvenOrOdd" in arrow syntax', () => {
      expect(isEvenOrOdd).to.be.a("function");
      expect(isEvenOrOdd.toString().includes("=>")).to.equal(true);
    });
    it('"isEvenOrOdd" should return "even" if a number is even', () => {
      expect(isEvenOrOdd(100)).to.equal("even");
    });
    it('"isEvenOrOdd" should return "odd" if a number is odd.', () => {
      expect(isEvenOrOdd(7)).to.equal("odd");
    });
  });
  describe("05-count-number-of-digits", () => {
    it('should contain a function called "countNumberOfDigits" in arrow syntax', () => {
      expect(countNumberOfDigits).to.be.a("function");
      expect(countNumberOfDigits.toString().includes("=>")).to.equal(true);
    });
    it('"countNumberOfDigits" should count the number of digits', () => {
      expect(countNumberOfDigits(5000)).to.equal(4);
    });
  });
});
