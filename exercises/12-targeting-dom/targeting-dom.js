/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  console.log(document.querySelector("li"))
  console.log(document.querySelector("#myId"))
  console.log(document.querySelectorAll(".bg-warning"))
  console.log(document.querySelector(".btn-primary"))
  console.log(document.querySelectorAll(".link"))
  console.log(document.querySelector("#targetButton"))

  const targetLinks = document.querySelectorAll(".target-link");
  targetLinks.forEach((link) => console.log(link));

  const cells = document.querySelectorAll("#myRow > .col");
  cells.forEach((cell) => console.log("cell", cell));
  // Put your answers in here
})();
