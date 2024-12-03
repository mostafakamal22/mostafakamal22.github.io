// Chech if their is an authed user or not
function checkAuth() {
  // Get authed user from local storage
  var authedUser = localStorage.getItem("authedUser");

  if (!authedUser) {
    var location = window.location.pathname;
    console.log(location);

    if (location === "/" || location === "/index.html") {
      //   window.location.assign("/home");
    }
    // switch (key) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }
  }
}

checkAuth();
