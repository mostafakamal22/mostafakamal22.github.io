class GameDetails {
  displayGameDetailsSection() {}
}

const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3b6b50d58amsh1e05934512d9fa2p11d79cjsn2763e54d1ef4",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
