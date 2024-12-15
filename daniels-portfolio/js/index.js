// Global Variables
const navbarHeader = document.getElementById("navbar-header");
const nabvarLinks = document.getElementsByClassName("nav-link");
const navbarBrand = document.getElementById("brand");

const rootElement = document.documentElement;

// Events
window.addEventListener("scroll", () => {
  const yOffset = window.scrollY;
  const isNavbarHeaderHasScrollClass =
    navbarHeader.classList.contains("header-scrolled");

  if (yOffset > 0 && !isNavbarHeaderHasScrollClass) {
    navbarHeader.classList.add("header-scrolled");

    rootElement.style.setProperty("--navbar-links-color", "#343434");

    return;
  }

  if (yOffset === 0) {
    navbarHeader.classList.remove("header-scrolled");

    rootElement.style.setProperty("--navbar-links-color", "#f7f7f7");
  }
});
