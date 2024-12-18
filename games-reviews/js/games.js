// Global Variables
const gamesListSection = document.getElementById("games-list");

class GamesList {
  displayGamesListSection() {
    gamesListSection.classList.remove("d-none");
  }

  hideGamesListSection() {
    gamesListSection.classList.add("d-none");
  }
}

export default GamesList;
