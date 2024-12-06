// Chech if their is an authed user or not
function checkAuth() {
  // Get authed user from local storage
  var authedUser = localStorage.getItem("authedUser");

  var location = window.location.pathname;

  if (!authedUser) {
    // Prevent Non authed users from going homepage
    if (
      location === basePath("/home/") ||
      location === basePath("/home/index.html")
    ) {
      window.location.assign(basePath("/"));
    }
  } else {
    // Prevent authed user from going to login/register pages
    if (location !== basePath("/home/") && location !== basePath("/home")) {
      window.location.assign(basePath("/home"));
    }
  }
}

checkAuth();
