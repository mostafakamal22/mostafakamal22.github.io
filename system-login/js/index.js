// Global Variables

// Get users from local storage
function getUsers() {
  var users = localStorage.getItem("users");

  if (users) {
    return JSON.parse(users);
  }

  return [];
}

// Set users to local storage
function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
