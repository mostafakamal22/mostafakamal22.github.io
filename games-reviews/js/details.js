// Global Varibales
const gameDetailsSection = document.getElementById("game-details");

class GameDetails {
  displayGameDetailsSection() {
    gameDetailsSection.classList.remove("d-none");
  }

  hideGameDetailsSection() {
    // Clear the details section on close
    gameDetailsSection.replaceChildren();

    gameDetailsSection.classList.add("d-none");
  }
}

export default GameDetails;
