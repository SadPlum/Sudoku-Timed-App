import { OpenGames } from "./openGameSchema";
import { difficultyArray } from "../../utils/gameData";

export const allOpenGames = async () => {
  // Find all open games, array of 6 games
  const games = await OpenGames.find({}).maxTimeMS(10000);
  // Sort by game id (0-5, from easiest to hardest)
  const sortedGames = games.sort((a, b) => {
    return a.id - b.id;
  });
  // return
  return sortedGames;
};

export const openGame = async (diff) => {
  const difficultyString: string = diff;
  // Ensure param is valid difficulty
  if (difficultyArray.find((diff) => diff) === undefined) {
    return undefined;
  }
  // Find one open game by difficulty string taken from req.param
  const game = await OpenGames.findOne({ difficulty: `${diff}` }).maxTimeMS(
    10000
  );
  // return
  return game;
};
