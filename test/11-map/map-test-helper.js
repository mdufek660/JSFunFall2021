import { getAnswer } from "../getAnswer.js";

const doubleValuesStr = getAnswer("../exercises/11-map/01-double-values.js");
const doubleValues = eval(`(numbers) => {
  let newNumbers;
  ${doubleValuesStr}
  return newNumbers;
}`);

import doubleValuesFunc from "../../exercises/11-map/02-double-values-func.js";

import createBlogList from "../../exercises/11-map/03-blog-list.js";

export { doubleValues, doubleValuesFunc, createBlogList };
