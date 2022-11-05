import { PrivateGames } from "./privateGameSchema";
import { generateBoard } from "../../functions/boardFunctions/generateBoard/generateBoard";
import { randomizePlayBoard } from "../../functions/boardFunctions/randomizePlayBoard/newRandomizePlayBoard";
import mongoose from "mongoose";

export const findPrivateGame = async (_id) => {
  const objectId: string = _id;
  const game = await PrivateGames.findOne({ _id: objectId }).maxTimeMS(10000);
  return game;
};

export const generatePrivateGame = async (difficulty) => {
  const _id = new mongoose.Types.ObjectId();
  const gameBoard = generateBoard();
  const playBoard = randomizePlayBoard(gameBoard, difficulty);
  const game = { _id: _id, gameBoard: gameBoard, playBoard: playBoard };
  return game;
};
