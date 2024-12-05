// Chech if their is an authed user or not
function checkAuth() {
  // Get authed user from local storage
  var authedUser = localStorage.getItem("authedUser");
  console.log({ authedUser });
  var location = window.location.pathname;
  console.log({ location });

  if (!authedUser) {
    // Prevent Non authed users from going homepage
    if (location === "/home/") {
      console.log("prevent not authed");
      window.location.assign("/");
    }
  } else {
    // Prevent authed user from going to login/register pages
    if (location !== "/home/" && location !== "/home") {
      console.log("prevent authed");
      window.location.assign("/home");
    }
  }
}

checkAuth();
