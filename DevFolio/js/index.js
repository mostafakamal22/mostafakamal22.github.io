// Global variables
const navbarHeader = document.getElementById("navbar-header");

// Events
window.addEventListener("scroll", () => {
  const yOffset = window.scrollY;
  const isNavbarHeaderHasScrollClass =
    navbarHeader.classList.contains("header-scrolled");

  if (yOffset > 0 && !isNavbarHeaderHasScrollClass) {
    navbarHeader.classList.add("header-scrolled");
    return;
  }

  if (yOffset === 0) {
    navbarHeader.classList.remove("header-scrolled");
  }
});
