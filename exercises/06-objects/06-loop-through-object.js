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

/*
  -The output string should have two variables, the actual value of each key, and the key itself
      -There are three consistent strings between these two variables
          -Need to make the three consistent strings as consts since they won't change
          -Add them to the string with the necessary variables between
      -Need to reiterate the process above for each entry of the object
          -For loop to go through them
  -Need to return a solo string
*/
const generateLinks = (links) => {

  // WRITE YOUR ANSWER HERE

  //Three consts from above
  const hrefOpener="\<a href\=\""
  const hrefCloser="\"\>"
  const closeTag="\<\/a\>"

  //needed return string
  let returnString="";

  //loop through each entry
  for(let link in links){
    returnString+=(hrefOpener+links[link]+hrefCloser+link+closeTag).toString()
  }
  return returnString
};

// IGNORE THIS BELOW. It is for the tests.

let links = {
    Dogs: "http://www.omfgdogs.com",
    Kittens: "https://giphy.com/search/kitten",
    "Hamster Dance": "https://hamster.dance/hamsterdance/",
  };
let temp = generateLinks(links)
console.log(temp)

links = {
  cat: "http://www.cat.co.uk.net.tv.gov",
  dog: "https://www.dog.net.co.com",
  catdog: "https://www.catdog.uk.net.tv.gov.net.co.com"
}
temp = generateLinks(links)
console.log(temp)

links={}
temp = generateLinks(links)
console.log(temp)

links={"The names":{catboy:"https://www.catboyIsReal.com"}}
temp = generateLinks(links)
console.log(temp)

export default generateLinks;
