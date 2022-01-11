(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  /**
   * Challenge 1: Alert Me
   * When the clicks on the button that says "Alert Me!", it should display an alert.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
   */
  // Write your answer here
  const alertButton = document.querySelector("#alertMeButton");
  alertButton.addEventListener("click", () => {alert("Alerted!")});
  /**
   * Challenge 2: Disable a button that will charge a credit card.
   *
   * To prevent users from charging the credit card more than once:
   * 1. Disable the button when it is clicked.
   * 2. Change the text to say e.g. "Loading ..." once it is clicked.
   */
  // Write your answer here
  const creditCardChargeButton = document.querySelector("#creditCardChargeButton");
  creditCardChargeButton.addEventListener("click", () =>{
    creditCardChargeButton.disabled = true;
    creditCardChargeButton.textContent="Loading..."
  });
  /**
   * Challenge 3: Show comments for the news story.
   *
   * When the user clicks on the "View Comments" button, the comment section should appear.
   * Right now, the comments are hidden because they have the class ".hidden",
   * but you can switch up the HTML so that it uses inline styles if you like.
   *
   * BONUS: Clicking on the button should toggle instead of just show the comments.
   * If the comments are open, change the button text from "View Comments" to "Hide Comments".
   */
  // Write your answer here
  const viewCommentButton = document.querySelector("#viewCommentButton");
  const commentSectionToToggle=document.querySelector("#commentSectionToToggle");

  viewCommentButton.addEventListener("click", () => {
    if(viewCommentButton.textContent=="View Comments"){
        viewCommentButton.textContent="Hide Comments";
        commentSectionToToggle.classList.remove("hidden")
    }
    else{
        viewCommentButton.textContent=="View Comments";
        commentSectionToToggle.classList.add("hidden");
    }
  })
  /**
   * Challenge 4: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */
  // Write your answer here

      const captureMeInput = document.querySelector("#captureMeInput");
      const captureMeOutput= document.querySelector("#captureMeOutput");
      
      captureMeInput.addEventListener("input", () =>
      captureMeOutput.innerHTML=captureMeInput.value)
  /**
   * Challenge 5: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here
          const wseInput = document.querySelector("#worstSearchEngineInput");
        const wseOutput= document.querySelector("#worstSearchEngineOutput");
          const wseButton = document.querySelector("#wseButton");
          
          worstSearchEngineInput.addEventListener("keypress", (key) =>{
            if(key==="Enter"){wseOutput.innerHTML = "No results for " + wseInput.value + " found";}})          }
          
          wseButton.addEventListener("click", () =>{
          wseOutput.innerHTML = "No results for " + wseInput.value + " found";})
  /**
   * Challenge 6: Add pagination to the student table.
   *
   * First, when the page initially loads, only the first 10 students should be visible.
   * (That is, every student row that has class="page1"). You can just use CSS / HTML to do this.
   *
   * Second, clicking on the pagination below should show and hide different students in the table:
   * - Clicking on the "«" and "1" buttons should show everything in class="page1" and hide everything in class="page2".
   * - Clicking on the "2" and "»" buttons should show everything in class="page2" and hide everything in class="page1".
   */
  // Write your answer here
  /**
   * Challenge 7: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here
})();
