// Global Variables
var nameContainer = document.getElementById("username");

// Set username at UI
setUserName();

function setUserName() {
  //Get username from local storage session
  var username = localStorage.getItem("authedUser");

  if (!username) {
    return;
  }

  // Update UI
  nameContainer.innerText = username;
}
