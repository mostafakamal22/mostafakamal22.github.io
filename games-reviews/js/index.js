import UI from "./UI.js";

// Global Variables
const navLinks = document.querySelectorAll(".nav-link");

// Events
document.addEventListener("DOMContentLoaded", async () => {
  const Ui = new UI();

  await Ui.displayGamesList("mmorpg");
});

navLinks.forEach((link) => {
  link.addEventListener("click", async function (e) {
    const category = this.getAttribute("aria-controls");
    const Ui = new UI();

    await Ui.displayGamesList(category);
  });
});
