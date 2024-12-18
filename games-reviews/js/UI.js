import GameDetails from "./details.js";
import GamesList from "./games.js";

// Global Variables
const gamesTabsContainers = document.querySelectorAll(".tab-pane");

const gameDetailsSection = document.getElementById("game-details");

class UI {
  async fetchData(dataType, value) {
    const url =
      dataType === "list"
        ? `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${value}`
        : `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${value}`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3b6b50d58amsh1e05934512d9fa2p11d79cjsn2763e54d1ef4",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);
    }
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

    if (
      !gamesList ||
      !Array.isArray(gamesList) ||
      gamesList.length === 0 ||
      !gameTabContainer
    ) {
      console.warn("No games found or container not found.");
      return;
    }

    // Create a row to hold game cards
    const row = document.createElement("div");
    row.classList.add("row", "g-3");

    // Use a document fragment for better performance
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < gamesList.length; i++) {
      const { id, title, thumbnail, short_description, genre, platform } =
        gamesList[i];

      // Create column
      const col = document.createElement("div");
      col.classList.add("col-md-3");

      // Create game card
      const gameCard = document.createElement("div");
      gameCard.classList.add("card", "bg-transparent");
      gameCard.setAttribute("data-game-id", `${id}`);

      // Add click event listener to the card
      gameCard.addEventListener("click", async () => {
        await this.handleGameCardClick(`+${id}`);
      });

      // Add inner content to the game card
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

      // Append game card to column
      col.appendChild(gameCard);

      // Append column to fragment
      fragment.appendChild(col);
    }

    // Append fragment to the row
    row.appendChild(fragment);

    // Append row to the game tab container
    gameTabContainer.appendChild(row);
  }

  async displayGameDetails(gameID) {
    // Fetch game details
    const { title, thumbnail, status, description, game_url, genre, platform } =
      await this.fetchData("game-detail", gameID);

    // Create container
    const container = document.createElement("div");
    container.classList.add("container", "position-relative", "py-4");

    // Create close button
    const closeButton = document.createElement("button");
    closeButton.classList.add(
      "btn",
      "fs-2",
      "text-secondary",
      "position-absolute",
      "end-0",
      "me-1",
      "close-btn"
    );
    closeButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    closeButton.addEventListener("click", () => {
      // Hide game details section
      const gameDetails = new GameDetails();

      gameDetails.hideGameDetailsSection();

      // Show games list section
      const gamesList = new GamesList();
      gamesList.displayGamesListSection();
    });

    // Create header
    const header = document.createElement("header");
    header.classList.add("mb-5");
    header.innerHTML = `<h2>Game Details</h2>`;

    // Create content rows
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

    // Assemble content
    row.appendChild(thumbnailCol);
    row.appendChild(detailsCol);
    container.appendChild(closeButton);
    container.appendChild(header);
    container.appendChild(row);

    // Append to the game details section
    gameDetailsSection.appendChild(container);
  }
}

export default UI;
