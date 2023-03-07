import {
  allOpenGames,
  openGame,
  getGameImages,
} from "../../models/openGames/openGameModel";

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
    const _id = req.params._id;
    const game = await openGame(_id);
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
