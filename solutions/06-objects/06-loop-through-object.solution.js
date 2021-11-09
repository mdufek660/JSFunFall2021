/**
 * Loop through all properties within the "links" object
 * an return a list of HTML links.
 * @param {object} links e.g. { Text: "https://url.com" }
 * @returns {string} of <a> tags
 *
 * @example
 *
 * const links = {
 *   Dogs: "http://www.omfgdogs.com",
 *   Kittens: "https://giphy.com/search/kitten",
 *   "Hamster Dance": "https://hamster.dance/hamsterdance/",
 * };
 *
 * generateLinks(links);
 * // <a href="http://www.omfgdogs.com">Dogs</a><a href="https://giphy.com/search/kitten">Kittens</a><a href="https://hamster.dance/hamsterdance/">Hamster Dance</a>
 */

const generateLinks = (links) => {
  // WRITE YOUR ANSWER HERE

  // Solution 1: For ... in loop
  let html = "";
  for (let linkName in links) {
    let href = links[linkName];
    html = html + '<a href="' + href + '">' + linkName + "</a>";
  }
  return html;

  // Solution 2: for ... of with Object.entries
  let html = "";
  for (let [text, href] of Object.entries(links)) {
    html += `<a href="${href}">${text}</a>`;
  }
  return html;
};

// IGNORE THIS BELOW. It is for the tests.

export default generateLinks;
