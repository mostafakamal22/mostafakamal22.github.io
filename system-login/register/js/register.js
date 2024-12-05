// Global Variables
var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var registerButton = document.getElementById("register");

// Register event
registerButton.addEventListener("click", handleRegister);

// Register functionality
function handleRegister() {
  // Inputs Validation
  if (
    !validateUsername(userName?.value) ||
    !validateEmail(userEmail?.value) ||
    isEmailAlreadyExists(userEmail?.value) ||
    !validatePassword(userPassword?.value)
  ) {
    inputValidation();

    return;
  }

  // Get available users
  var users = getUsers();

  var newUser = {
    name: userName?.value?.trim(),
    email: userEmail?.value,
    password: userPassword?.value,
  };

  //Set new users array to local storage
  var updatedUsers = [...users, newUser];
  setUsers(updatedUsers);

  // Naviagate user to login page
  location.assign(basePath("/"));
}
