// Global Variables
const navbarHeader = document.getElementById("navbar-header");
const nabvarLinks = document.getElementsByClassName("nav-link");
const navbarBrand = document.getElementById("brand");

// Events
window.addEventListener("scroll", () => {
  const yOffset = window.scrollY;
  const isNavbarHeaderHasScrollClass =
    navbarHeader.classList.contains("header-scrolled");

  if (yOffset > 0 && !isNavbarHeaderHasScrollClass) {
    navbarHeader.classList.add("header-scrolled");

    for (let i = 0; i < nabvarLinks.length; i++) {
      const link = nabvarLinks[i];

      link.style.setProperty("color", "var(--primary-text-color)");

      link.style.setProperty("--bg-color", "var(--primary-text-color)");
    }

    navbarBrand.style.setProperty("color", "var(--primary-text-color)");
    return;
  }

  if (yOffset === 0) {
    navbarHeader.classList.remove("header-scrolled");

    for (let i = 0; i < nabvarLinks.length; i++) {
      const link = nabvarLinks[i];

      link.style.setProperty("color", "var(--bg-grey)");
      link.style.setProperty("--bg-color", "var(--bg-grey)");
    }

    navbarBrand.style.setProperty("color", "var(--bg-grey)");
  }
});
