const tempURI = "http://127.0.0.1:5000";
const openGames = "/api/v1/openGames";
const privateGames = "/api/v1/privategames";

export const getAllOpenGames = async () => {
  const gamesData = await fetch(`${tempURI}${openGames}`);
  const games = await gamesData.json();
  return games;
};

export const getPrivateGame = async (gameId: string | undefined) => {
  if (!gameId) {
    console.log("No game Id");
    return;
  }
  const gameData = await fetch(`${tempURI}${privateGames}/game/${gameId}`);
  const game = await gameData.json();

  return game;
};

export const getOpenGame = async (gameId: string | undefined) => {
  if (!gameId) {
    console.log("No game Id");
    return;
  }
  const gameData = await fetch(`${tempURI}${openGames}/game/${gameId}`);
  const game = await gameData.json();

  return game;
};
