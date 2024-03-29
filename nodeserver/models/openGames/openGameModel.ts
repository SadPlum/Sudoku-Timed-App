import { OpenGames } from "./openGameSchema";
import { difficultyArray } from "../../utils/gameData";

import { generateBoard } from "../../functions/boardFunctions/generateBoard/generateBoard";
import { randomizePlayBoard } from "../../functions/boardFunctions/randomizePlayBoard/newRandomizePlayBoard";

import { GameInterface } from "../../interfaces/GameInterface";


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

export const getGameImages = async () => {
  const difficultyArray = [45, 40, 35, 30, 25, 20];
  const boardArray = [];
  difficultyArray.forEach((num) => {
    const board = generateBoard();
    const playBoard = randomizePlayBoard(board, num);
    boardArray.push(playBoard);
  });
  return boardArray;
};

export const openGame = async (_id: string) => {
  // // Ensure param is valid difficulty
  // if (difficultyArray.find((diff) => diff) === undefined) {
  //   return undefined;
  // }
  // Find one open game by difficulty string taken from req.param
  const game = await OpenGames.findOne({ _id: _id }).maxTimeMS(10000);
  // return
  return game;
};

export const updateOpenGame = async ({ _id, name, time }: GameInterface) => {
  const player = [{ name: name, time: time }];
  console.log(_id, player);
  const game = await OpenGames.updateOne(
    { _id: _id },
    { $push: { leaderboard: player } }
  );
  return game;
};
