// Add your code here
const form = document.querySelector(".sign-up-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the elements from the form
  const fullnameInput = document.getElementById("fullname");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const sheHerInput = document.getElementById("sheher");
  const heHimInput = document.getElementById("hehim");
  const theyThemInput = document.getElementById("theythem");
  const dateInput = document.getElementById("dob");

  // Get the values
  const fullnameValue = fullnameInput.value.trim();
  const usernameValue = usernameInput.value.trim();
  const emailValue = emailInput.value.trim();
  let pronounsValue;

  //check if the prefer pronouns is correct
  if (sheHerInput.checked) {
    pronounsValue = "she/her";
  } else if (heHimInput.checked) {
    pronounsValue = "he/him";
  } else if (theyThemInput.checked) {
    pronounsValue = "they/them";
  } else {
    pronounsValue = "I prefer not to say";
  }

  const dateValue = dateInput.value;

  // Check what if the user leave the section blank
  if (
    fullnameValue === "" ||
    usernameValue === "" ||
    emailValue === "" ||
    dateValue === ""
  ) {
    console.warn("You must enter some data to submit this form"); //display the warning
  } else {
    console.group("======= Form Submission =======");
    console.log("\tFullname   :", fullnameValue);
    console.log("\tUsername   :", usernameValue);
    console.log("\tEmail      :", emailValue);
    console.log("\tPronouns   :", pronounsValue);
    console.log("\tDate       :", dateValue);
    console.groupEnd();
  }
});

// Reset form fields when Reset button is clicked
form.addEventListener("reset", function (event) {
  console.log("Form reset!");
});
