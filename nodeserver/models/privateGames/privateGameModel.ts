import mongoose from "mongoose";
import { PrivateGames } from "./privateGameSchema";
import { generateBoard } from "../../functions/boardFunctions/generateBoard/generateBoard";
import { randomizePlayBoard } from "../../functions/boardFunctions/randomizePlayBoard/newRandomizePlayBoard";
import { PrivateGameInterface } from "../../interfaces/privateGameInterface";

export const findPrivateGame = async (_id) => {
  const objectId: string = _id;
  const game = await PrivateGames.findById({ _id: objectId });
  console.log(game);
  return game;
};

export const generatePrivateGame = async (difficulty) => {
  const gameBoard = generateBoard();
  const playBoard = randomizePlayBoard(gameBoard, difficulty);
  const game = { gameBoard: gameBoard, playBoard: playBoard };
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
  return privateGame;
};

export const updatePrivateGame = async ({
  _id,
  name,
  time,
}: PrivateGameInterface) => {
  const player = [{ name: name, time: time }];
  console.log(_id, player);
  await PrivateGames.updateOne(
    { _id: _id },
    { $push: { leaderboard: player } }
  );
};
