import {
  findPrivateGame,
  generatePrivateGame,
  createPrivateGame,
} from "../../models/privateGames/privateGameModel";
import { PrivateGameInterface } from "../../interfaces/privateGameInterface";

export const getPrivateGame = async (req, res) => {
  const _id = req.params.id;
  const game = await findPrivateGame(_id);
  res.status(200).json({
    status: "success",
    data: game,
  });
};

export const getBoard = async (req, res) => {
  try {
    const difficulty = req.params.difficultyNum;
    const game = await generatePrivateGame(difficulty);
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

export const createNewPrivateGame = async (req, res) => {
  try {
    const data: PrivateGameInterface = req.body;
    console.log(data);
    const game = await createPrivateGame(data);
    res.status(200).json({
      status: "success",
      data: game,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updatePrivateGame = async (req, res) => {};
