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

// Get app base url path
function basePath(url) {
  var baseUrl = window.location.host.includes("127.0.0.1")
    ? "" // No base path in local development
    : "/system-login";

  return `${baseUrl}${url}`;
}
