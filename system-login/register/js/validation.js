// GLobal Variables
var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");

var usernameChecksContainer = document.querySelector(
  ".username-validation div"
);

var emailChecksContainer = document.querySelector(".email-validation div");

var passwordChecksContainer = document.querySelectorAll(
  ".password-validation div"
);

// Validation Events
// Only at register page
if (
  location.pathname === basePath("/register") ||
  location.pathname === basePath("/register/") ||
  location.pathname === basePath("/register/index.html")
) {
  userName?.addEventListener("input", function () {
    inputValidation(this);
  });
  userEmail?.addEventListener("input", function () {
    inputValidation(this);
  });
  userPassword?.addEventListener("input", function () {
    inputValidation(this);
  });
}

// 1. Validate username
function validateUsername(username) {
  var usernameRegex = /^[a-zA-Z ]{3,15}$/;
  return usernameRegex.test(username);
}

// 2. Validate Email
function validateEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// 3. Validate Password
function validatePassword(password) {
  var passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,15}$/;
  return passwordRegex.test(password);
}

// Input validation
function inputValidation(input) {
  if (input?.id === "name") {
    var isValidUserName = validateUsername(input?.value);

    isValidUserName ? validInput(input) : invalidInput(input);

    UsernameChecksValidator(input?.value);
  } else if (input?.id === "email") {
    var isValidEmail = validateEmail(input?.value);

    isValidEmail ? validInput(input) : invalidInput(input);
  } else if (input?.id === "password") {
    var isValidPassword = validatePassword(input?.value);

    isValidPassword ? validInput(input) : invalidInput(input);

    PasswordChecksValidator(input?.value);
  } else {
    // Validate all inputs
    // username
    var isValidUserName = validateUsername(userName?.value);

    isValidUserName ? validInput(userName) : invalidInput(userName);

    UsernameChecksValidator(userName?.value);

    // Email
    var isValidEmail = validateEmail(userEmail?.value);

    isValidEmail ? validInput(userEmail) : invalidInput(userEmail);

    if (
      !userEmail?.value ||
      !isValidEmail ||
      isEmailAlreadyExists(userEmail?.value)
    ) {
      invalidInput(userEmail);
      !isValidEmail && EmailChecksValidator(true, "Invalid email.");
      isEmailAlreadyExists(userEmail?.value) &&
        EmailChecksValidator(
          true,
          "This email is already registered. Please use a different email."
        );
    } else {
      validInput(userEmail);
      EmailChecksValidator(false);
    }

    // Password
    var isValidPassword = validatePassword(userPassword?.value);

    isValidPassword ? validInput(userPassword) : invalidInput(userPassword);

    PasswordChecksValidator(userPassword?.value);
  }
}

// Make input valid
function validInput(input) {
  input?.classList.add("is-valid");
  input?.classList.remove("is-invalid");
}

// Make input invalid
function invalidInput(input) {
  input?.classList.add("is-invalid");
  input?.classList.remove("is-valid");
}

// Username Checks Validator
function UsernameChecksValidator(username) {
  if (validateUsername(username)) {
    usernameChecksContainer?.classList.add("valid", "text-success");
    usernameChecksContainer?.classList.remove("text-danger");
  } else {
    usernameChecksContainer?.classList.add("text-danger");
    usernameChecksContainer?.classList.remove("valid", "text-success");
  }
}

// Check if email already exist
function isEmailAlreadyExists(email) {
  return getUsers().find((u) => u.email === email);
}

// Email Checks Validator
function EmailChecksValidator(isError, message) {
  if (isError) {
    emailChecksContainer?.classList.remove("d-none");
    emailChecksContainer.innerHTML = `<i class="fa-solid fa-circle-xmark me-1"></i>${message}`;
  } else {
    emailChecksContainer?.classList.add("d-none");
  }
}

// Password Checks Validator
function PasswordChecksValidator(password) {
  // Check password length
  if (password.length >= 9 && password.length <= 15) {
    passwordChecksContainer[0].classList.add("valid", "text-success");
    passwordChecksContainer[0].classList.remove("text-danger");
  } else {
    passwordChecksContainer[0].classList.add("text-danger");
    passwordChecksContainer[0].classList.remove("valid", "text-success");
  }

  // Check for lowercase characters
  if (/[a-z]/.test(password)) {
    passwordChecksContainer[1].classList.add("valid", "text-success");
    passwordChecksContainer[1].classList.remove("text-danger");
  } else {
    passwordChecksContainer[1].classList.add("text-danger");
    passwordChecksContainer[1].classList.remove("valid", "text-success");
  }

  // Check for numeric characters
  if (/[0-9]/.test(password)) {
    passwordChecksContainer[2].classList.add("valid", "text-success");
    passwordChecksContainer[2].classList.remove("text-danger");
  } else {
    passwordChecksContainer[2].classList.add("text-danger");
    passwordChecksContainer[2].classList.remove("valid", "text-success");
  }

  // Check for uppercase characters
  if (/[A-Z]/.test(password)) {
    passwordChecksContainer[3].classList.add("valid", "text-success");
    passwordChecksContainer[3].classList.remove("text-danger");
  } else {
    passwordChecksContainer[3].classList.add("text-danger");
    passwordChecksContainer[3].classList.remove("valid", "text-success");
  }

  // Check for special characters
  var specialCharRegex = /^[A-Za-z\d@$!%*?&]*$/;
  var containsSpecialChar = /[@$!%*?&]/;

  if (specialCharRegex.test(password) && containsSpecialChar.test(password)) {
    passwordChecksContainer[4].classList.add("valid", "text-success");
    passwordChecksContainer[4].classList.remove("text-danger");
  } else {
    passwordChecksContainer[4].classList.add("text-danger");
    passwordChecksContainer[4].classList.remove("valid", "text-success");
  }

  // Check for spaces
  if (!/ /.test(password)) {
    passwordChecksContainer[5].classList.add("valid", "text-success");
    passwordChecksContainer[5].classList.remove("text-danger");
  } else {
    passwordChecksContainer[5].classList.add("text-danger");
    passwordChecksContainer[5].classList.remove("valid", "text-success");
  }
}
