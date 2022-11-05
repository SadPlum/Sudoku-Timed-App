const tempURI = "http://127.0.0.1:5000";
const openGames = "/api/v1/openGames";

export const getAllOpenGames = async () => {
  const gamesData = await fetch(`${tempURI}${openGames}`);
  const games = await gamesData.json();

  return games;
};
