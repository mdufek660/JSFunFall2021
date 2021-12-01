import { expect } from "chai";
import {
  doubleValues,
  doubleValuesFunc,
  createBlogList,
} from "./map-test-helper.js";

describe("10. Map", () => {
  describe("01-double-values", () => {
    it('"newNumbers" should be an array of numbers, where each number is double a number within the original "numbers" array', () => {
      const doubledValues = doubleValues([2, 3, 4], (number) => {
        return number * 2;
      });
      expect(doubledValues).to.deep.equal([4, 6, 8]);
    });
    it("should use .map()", () => {
      const funcStr = doubleValues.toString();
      expect(funcStr).to.contain(".map");
    });
  });

  describe("02-double-values-func", () => {
    it('should return an array of numbers, where each number is double a number within the original "numbers" array', () => {
      const doubledValues = doubleValuesFunc([2, 3, 4], (number) => {
        return number * 2;
      });
      expect(doubledValues).to.deep.equal([4, 6, 8]);
    });
    it("should use .map()", () => {
      const funcStr = doubleValuesFunc.toString();
      expect(funcStr).to.contain(".map");
    });
  });

  describe("03-blog-list", () => {
    it('should return an array of strings, where each item is e.g. "<li>Blog Post Title</li>"', () => {
      const blogTitles = [
        "The Problem with this Keyword in JavaScript",
        "What are High Order Functions?",
      ];
      const blogList = createBlogList(blogTitles);
      expect(blogList[0]).to.equal(
        "<li>The Problem with this Keyword in JavaScript</li>"
      );
      expect(blogList[1]).to.equal("<li>What are High Order Functions?</li>");
    });
    it("should use .map()", () => {
      const funcStr = createBlogList.toString();
      expect(funcStr).to.contain(".map");
    });
  });
});
