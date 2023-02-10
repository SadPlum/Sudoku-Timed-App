import mongoose from "mongoose";
import { PrivateGames } from "./privateGameSchema";
import { generateBoard } from "../../functions/boardFunctions/generateBoard/generateBoard";
import { randomizePlayBoard } from "../../functions/boardFunctions/randomizePlayBoard/newRandomizePlayBoard";
import { PrivateGameInterface } from "../../interfaces/privateGameInterface";

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

export const createPrivateGame = async ({
  playBoard,
  gameBoard,
  difficulty,
  name,
  time,
}: PrivateGameInterface) => {
  const id = await PrivateGames.estimatedDocumentCount();
  const leaderboard = [{ name: name, time: time }];
  const game = {
    difficulty: difficulty,
    playBoard: playBoard,
    gameBoard: gameBoard,
  };
  const _id = new mongoose.Types.ObjectId();

  const privateGame = await PrivateGames.create({
    _id: _id,
    id: id,
    game: game,
    leaderboard: leaderboard,
  });
};
