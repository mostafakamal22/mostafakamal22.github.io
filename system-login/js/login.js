// Global Variables
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var loginButton = document.getElementById("login");

var emailChecksContainer = document.querySelector(".email-validation div");
var passwordChecksContainer = document.querySelector(
  ".password-validation div"
);

// Login event
loginButton.addEventListener("click", handleLogin);

// Login functionality
function handleLogin() {
  // Reset Error containers
  resetErrorContainers();

  //Validate Email
  var isValidEmail = validateEmail(userEmail?.value);

  if (!isValidEmail) {
    // invalid email
    invalidInput(userEmail);

    // show message
    emailErrorMessage("invalid email.");
    return;
  }

  // Get available users
  var users = getUsers();

  //Check for user with email
  var foundUser = users.find((u) => u.email === userEmail?.value);

  if (!foundUser) {
    // No account with that email
    invalidInput(userEmail);

    emailErrorMessage("No user found with this email.");
    return;
  }

  //Check user password
  if (foundUser.password !== userPassword?.value) {
    // wrong password
    validInput(userEmail);
    invalidInput(userPassword);

    passwordErrorMessage("Incorrect password. Ensure it’s typed correctly.");
    return;
  }

  // Okay user is valid (email & pass)

  //Set Authed user
  localStorage.setItem("authedUser", foundUser.name);

  // Login user
  location.assign(basePath("/home"));
}

// show email error msg
function emailErrorMessage(message) {
  //Show container
  emailChecksContainer.classList.remove("d-none");

  //show Message
  emailChecksContainer.innerHTML = `<i class="fa-solid fa-circle-xmark me-1"></i>${message}`;
}

// show password error msg
function passwordErrorMessage(message) {
  //Show container
  passwordChecksContainer.classList.remove("d-none");

  //show Message
  passwordChecksContainer.innerHTML = `<i class="fa-solid fa-circle-xmark me-1"></i>${message}`;
}

// reset inputs error message coontainers
function resetErrorContainers() {
  //Hide container
  emailChecksContainer.classList.add("d-none");
  passwordChecksContainer.classList.add("d-none");
}
