// Global Variables
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var loginButton = document.getElementById("login");

// Login event
loginButton.addEventListener("click", handleLogin);

// Login functionality
function handleLogin() {
  // Check email and password values
  if (!userEmail?.value || !userPassword?.value) {
    console.log("no email or password");
    return;
  }

  // Get available users
  var users = getUsers();

  //Check for user with email and password
  var foundUser = users.find(
    (u) => u.email === userEmail?.value && u.password === userPassword?.value
  );

  if (!foundUser) {
    console.log("wrong email or password");
    return;
  }

  // Okay user is valid

  //Set Authed user
  localStorage.setItem("authedUser", foundUser.name);

  // Login user
  location.assign("/home");
}
