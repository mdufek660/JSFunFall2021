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

  // Step 1 Target
  const alertButton = document.querySelector("#alertMe");

  // Step 2 React to the event
  alertButton.addEventListener("click", () => {
    // Step 3 Do something
    // The thing that happens after the event occurs
    alert("Alert Me!");
  });

  /**
   * Challenge 2: Disable a button that will charge a credit card.
   *
   * To prevent users from charging the credit card more than once:
   * 1. Disable the button when it is clicked.
   * 2. Change the text to say e.g. "Loading ..." once it is clicked.
   */

  // Step 1 Target
  const chargeButton = document.querySelector("#chargeCreditCard");
  chargeButton.type = "submit";

  // Step 2 React to an event
  const reactToCharge = () => {
    // Step 3 Do something - disable the button and change the test to say loading
    chargeButton.disabled = "disabled";
    chargeButton.textContent = "Loading ...";
  };
  chargeButton.addEventListener("click", reactToCharge);

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

  // Step 1 Target Comments
  const toggleComments = document.querySelector("#toggleComments");
  const button = event.target;
  const comments = document.querySelector("#comments");

  // Step 2 React to an event
  toggleComments.addEventListener("click", () => {
    // Step 3 Do something
    // Show comments if they are hidden
    if (comments.classList.contains("hidden")) {
      comments.classList.remove("hidden");
      button.textContent = "Hide Comments";
    } else {
      // Hide comments if they are not hidden
      comments.classList.add("hidden");
      button.textContent = "Show Comments";
    }
  });

  /**
   * Challenge 4: Rendering what a user is typing on the page.
   *
   * When the user types inside the textbook labeled "Enter mystery text here",
   * it should display what the user is typing in the <div></div> tags below.
   */

  // Step 1: Target
  const mysteryText = document.querySelector("#mysteryText");
  const showUserText = document.querySelector("#mysteryTextDisplay");

  const callback = (event) => {
    // Step 3: Do something - display the text that the user is typing to the screen
    showUserText.textContent = event.target.value;
  };

  // Step 2: React to Event
  mysteryText.addEventListener("input", callback);

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

  // Step 1: Target
  const oceanForm = document.querySelector("#handleThisForm");
  const oceanInput = document.querySelector("#oceanInput");
  const oceanDisplay = document.querySelector("#oceanOutput");

  // Step 2: React to event
  oceanForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Step 3: Do something - stop the form from refreshing and display "No results for ____ found".
    oceanDisplay.textContent = `No results for ${oceanInput.value} found`;
  });

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
  const showPage = (pageNumber) => {
    const tableRows = document.querySelectorAll("tr");
    tableRows.forEach((row) => {
      const group = `.page${pageNumber}`;
      if (row.matches(group)) {
        row.classList.remove("hidden");
      } else {
        row.classList.add("hidden");
      }
    });
  };

  showPage(1);

  document
    .querySelector("#previousButton")
    .addEventListener("click", () => showPage(1));
  document
    .querySelector("#buttonPage1")
    .addEventListener("click", () => showPage(1));
  document
    .querySelector("#buttonPage2")
    .addEventListener("click", () => showPage(2));
  document
    .querySelector("#nextButton")
    .addEventListener("click", () => showPage(2));

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
  document.querySelector("#termsForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const terms = document.querySelector("#terms");
    const termsError = document.querySelector("#termsError");
    const termsSuccess = document.querySelector("#termsSuccess");

    const showTermsError = () => {
      // Makes "I Agree to the Terms and Conditions" red
      if (!terms.classList.contains("is-invalid")) {
        terms.classList.add("is-invalid");
      }

      // Hides success message
      if (!termsSuccess.classList.contains("hidden")) {
        termsSuccess.classList.add("hidden");
      }

      // Shows error message
      if (termsError.classList.contains("hidden")) {
        termsError.classList.remove("hidden");
      }
    };

    const showTermsSuccess = () => {
      // Reverts "I Agree to the Terms and Conditions" back to original color
      if (terms.classList.contains("is-invalid")) {
        terms.classList.remove("is-invalid");
      }

      // Hides success message
      if (termsSuccess.classList.contains("hidden")) {
        termsSuccess.classList.remove("hidden");
      }

      // Shows error message
      if (!termsError.classList.contains("hidden")) {
        termsError.classList.add("hidden");
      }
    };

    const checkbox = document.querySelector("#terms");
    if (checkbox.checked) showTermsSuccess();
    else showTermsError();
  });
})();
