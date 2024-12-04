// Global Variables
var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var registerButton = document.getElementById("register");

// Register event
registerButton.addEventListener("click", handleRegister);

// Register functionality
function handleRegister() {
  // Check users name, email and password values
  if (!userName?.value || !userEmail?.value || !userPassword?.value) {
    console.log("no user name , email or password");
    return;
  }

  // Get available users
  var users = getUsers();

  var newUser = {
    name: userName?.value,
    email: userEmail?.value,
    password: userPassword?.value,
  };

  //Set new users array to local storage
  var updatedUsers = [...users, newUser];
  setUsers(updatedUsers);

  // Naviagate user to login page
  location.assign("/");
}