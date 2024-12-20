import GameDetails from "./details.js";
import GamesList from "./games.js";

// Global Variables
const gamesTabsContainers = document.querySelectorAll(".tab-pane");

const gameDetailsSection = document.getElementById("game-details");

const loadingSpinner = document.getElementById("loading-spinner");

class UI {
  async fetchData(dataType, value) {
    // const url =
    //   dataType === "list"
    //     ? `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${value}`
    //     : `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${value}`;

    // const options = {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-key": "3b6b50d58amsh1e05934512d9fa2p11d79cjsn2763e54d1ef4",
    //     "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    //   },
    // };

    const url =
      dataType === "list"
        ? `https://www.freetogame.com/api/games?category=${value}`
        : `https://www.freetogame.com/api/game?id=${value}`;

    // Show loading spinner
    this.toggleLoadingSpinner();

    try {
      const response = await fetch(
        url
        // options
      );
      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);
    } finally {
      // Hide loading spinner
      this.toggleLoadingSpinner();
    }
  }

  handleFetchDataError(container) {
    // Show error message
    container.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
          <i
            class="fa-solid fa-exclamation-triangle flex-shrink-0 mb-1 me-2"
            role="img"
          ></i>
          <span class="error-message">
            Something went wrong. Please refresh the page and try again.
          </span>
        </div>`;
  }

  toggleLoadingSpinner() {
    loadingSpinner.classList.toggle("d-none");
  }

  async handleGameCardClick(gameID) {
    const gamesList = new GamesList();
    const gameDetailsSection = new GameDetails();

    await this.displayGameDetails(gameID);

    gamesList.hideGamesListSection();
    gameDetailsSection.displayGameDetailsSection();
  }

  async displayGamesList(category) {
    const gamesList = await this.fetchData("list", category);

    const gameTabContainer = Array.from(gamesTabsContainers)?.find(
      (t) => t.id?.toLowerCase() === category?.toLowerCase()
    );

    if (!gamesList || !Array.isArray(gamesList) || gamesList.length === 0) {
      console.log("No games found.");
      this.handleFetchDataError(gameTabContainer);
      return;
    }

    const row = document.createElement("div");
    row.classList.add("row", "g-3");

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < gamesList.length; i++) {
      const { id, title, thumbnail, short_description, genre, platform } =
        gamesList[i];

      const col = document.createElement("div");
      col.classList.add("col-md-3");

      const gameCard = document.createElement("div");
      gameCard.classList.add("card", "bg-transparent");
      gameCard.setAttribute("data-game-id", `${id}`);

      gameCard.addEventListener("click", async () => {
        await this.handleGameCardClick(`+${id}`);
      });

      gameCard.innerHTML = `
        <img
          class="card-img-top"
          src="${thumbnail}"
          alt="${title}"
          loading="lazy"
        />
        <div class="card-body">
          <h6 class="card-title d-flex justify-content-between align-items-center">
            <span>${title}</span>
            <span class="badge text-bg-primary">Free</span>
          </h6>
          <p class="card-text text-white text-center opacity-50 mt-2">
            ${short_description}
          </p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center gap-2 flex-wrap">
          <span class="badge bg-secondary">${genre}</span>
          <span class="badge bg-secondary">${platform}</span>
        </div>
      `;

      col.appendChild(gameCard);

      fragment.appendChild(col);
    }

    row.appendChild(fragment);

    gameTabContainer.appendChild(row);
  }

  async displayGameDetails(gameID) {
    const gameData = await this.fetchData("game-detail", gameID);

    if (!gameData) {
      console.log("Game data not found.");
      const container = document.createElement("div");
      container.classList.add("container", "position-relative", "py-4");

      gameDetailsSection.appendChild(container);

      this.handleFetchDataError(gameDetailsSection);
      return;
    }

    const { title, thumbnail, status, description, game_url, genre, platform } =
      gameData;

    const container = document.createElement("div");
    container.classList.add("container", "position-relative", "py-4");

    const closeButton = document.createElement("button");
    closeButton.classList.add(
      "btn-close",
      "position-absolute",
      "end-0",
      "me-1"
    );

    closeButton.addEventListener("click", () => {
      // Hide game details section
      const gameDetails = new GameDetails();

      gameDetails.hideGameDetailsSection();

      // Show games list section
      const gamesList = new GamesList();
      gamesList.displayGamesListSection();
    });

    const header = document.createElement("header");
    header.classList.add("mb-5");
    header.innerHTML = `<h2>Game Details</h2>`;

    const row = document.createElement("div");
    row.classList.add("row", "g-4");

    // Thumbnail column
    const thumbnailCol = document.createElement("div");
    thumbnailCol.classList.add("col-md-4");
    thumbnailCol.innerHTML = `
        <img class="w-100" src="${thumbnail}" alt="${title}" />
      `;

    // Details column
    const detailsCol = document.createElement("div");
    detailsCol.classList.add("col-md-8");
    detailsCol.innerHTML = `
        <h4 class="mb-3">Title: ${title}</h4>
        <h6 class="mb-3">Category: <span class="badge text-bg-info">${genre}</span></h6>
        <h6 class="mb-3">Platform: <span class="badge text-bg-info">${platform}</span></h6>
        <h6 class="mb-3">Status: <span class="badge text-bg-info">${status}</span></h6>
        <p class="game-desc">${description}</p>
        <button type="button" class="btn btn-outline-warning">
          <a class="text-white text-decoration-none" href="${game_url}" target="_blank">Show Game</a>
        </button>
      `;

    row.appendChild(thumbnailCol);
    row.appendChild(detailsCol);
    container.appendChild(closeButton);
    container.appendChild(header);
    container.appendChild(row);

    gameDetailsSection.appendChild(container);
  }
}

export default UI;
