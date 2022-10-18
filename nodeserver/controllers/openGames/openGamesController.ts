import { allOpenGames, openGame } from "../../models/openGames/openGameModel";

export const getAllGames = async (req, res) => {
  try {
    // Gets all open games
    const games = await allOpenGames();
    // If games cannot be found, throw error
    if (!games) {
      throw new Error("Gannot find games");
    }
    res.status(200).json({
      status: "success",
      data: games,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

export const getGame = async (req, res) => {
  try {
    // Search for games in openGames collection based on difficulty
    // Difficulty is taken as param
    const gameDifficulty = req.params.difficulty;
    const game = await openGame(gameDifficulty);
    // if game is returned undefined, throw error
    if (!game) {
      throw new Error("Cannot find game");
    }
    res.status(200).json({
      status: "success",
      data: game,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
