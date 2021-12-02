/**
 * Imagine that you are going to create a list of blog titles on your website like this:
 * <ul>
 *   <li>Blog Post 1</l1>
 *   <li>Blog Post 2</li>
 * </ul>
 *
 * Create an array of <li> tags from an array of blog post titles
 * @param {array} blogTitles an array of strings, where each item in this title of a blog post e.g. ["What I Learned Today", "Interview Tips"]
 * @return {array} a similar array of strings, but you are going to surround each blog title within <li> ... </li> tags
 *
 * @example
 * const blogTitles = ["What I Learned Today", "Interview Tips"];
 * const blogList = createBlogList(blogTitles);
 * console.log(blogList);
 * // ["<li>What I Learned Today</li>", "<li>Interview Tips</li>"];
 */

const createBlogList = (blogTitles) => {
  // WRITE YOUR ANSWER HERE
  return blogTitles.map((title) => {
    return "<li>" + title + "</li>";
  });
};

// IGNORE THIS BELOW. It is for the tests.

export default createBlogList;
