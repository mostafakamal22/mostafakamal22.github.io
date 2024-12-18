// Global Variables
const gamesTabsContainers = document.querySelectorAll(".tab-pane");

class UI {
  constructor(category) {
    this.category = category;
  }

  async fetchGameList() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;

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

  async displayGamesList() {
    const gamesList = await this.fetchGameList();

    const gameTabContainer = Array.from(gamesTabsContainers)?.find(
      (t) => t.id?.toLowerCase() === this.category?.toLowerCase()
    );

    if (!gamesList || !gameTabContainer) return;

    // Show list on ui
    const row = document.createElement("div");
    row.classList.add("row", "g-3");

    for (let i = 0; i < gamesList.length; i++) {
      const { id, title, thumbnail, short_description, genre, platform } =
        gamesList[i];

      const gameCard = `<div data-game-id=${id} class="col-md-3">
                <div class="card bg-transparent">
                  <img
                    class="card-img-top"
                    src=${thumbnail}
                    alt=${title}
                    loading="lazy"
                  />

                  <div class="card-body">
                    <h6
                      class="card-title d-flex justify-content-between align-items-center"
                    >
                      <span>${title}</span>
                      <span class="badge text-bg-primary">Free</span>
                    </h6>

                    <p class="card-text text-white text-center opacity-50 mt-2">
                    ${short_description}
                    </p>
                  </div>

                  <div
                    class="card-footer d-flex justify-content-between align-items-center gap-2 flex-wrap"
                  >
                    <span class="badge bg-secondary">${genre}</span>
                    <span class="badge bg-secondary">${platform}</span>
                  </div>
                </div>
              </div>`;

      row.innerHTML += gameCard;
    }

    gameTabContainer.appendChild(row);
  }

  displayGameDetails() {}
}

export default UI;
