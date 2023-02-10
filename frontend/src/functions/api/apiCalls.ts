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
  const gamesData = await fetch(`${tempURI}${privateGames}/game/${gameId}`);
  const games = await gamesData.json();
  console.log(games);
  return games;
};
