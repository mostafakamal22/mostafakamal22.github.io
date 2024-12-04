// Global Variables
var logoutButton = document.getElementById("logout");

//Logout Event
logoutButton.addEventListener("click", handleLogout);

// Logout functionality
function handleLogout() {
  //Set authed user to null
  localStorage.setItem("authedUser", "");

  //Navigate user to login page
  location.assign("/");
}
