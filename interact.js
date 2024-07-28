// entering alert
let wassup =
  "Hello! Welcome to a webpage that shines a brighter light on the life that is mine.";
console.log(wassup);

// success page
// constants and what they represent
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

// has a "listener" in form file giving the submit button things to do
form.addEventListener("submit", (e) => {
  // conditions need to be met
  submitButton.disabled = true;
  //stops submit from happening
  e.preventDefault();
  //returns href (URL) of the current page
  window.location.href = window.location.origin + "/success.html";
});

// timeout
setTimeout(() => {
  window.location.href = window.location.origin;
}, 5000);
