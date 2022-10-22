import {
  findPrivateGame,
  generatePrivateGame,
} from "../../models/privateGames/privateGameModel";

export const getPrivateGame = async (req, res) => {
  const _id = req.params.id;
  findPrivateGame(_id);
};

export const getBoard = async (req, res) => {
  try {
    const game = await generatePrivateGame();
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

export const createNewPrivateGame = async (req, res) => {};
export const updatePrivateGame = async (req, res) => {};
