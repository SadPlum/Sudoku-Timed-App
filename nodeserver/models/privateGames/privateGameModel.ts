import { PrivateGames } from "./privateGameSchema";

export const getPrivateGame = async (id) => {
  const objectId: string = id;
  const game = await PrivateGames.findOne({ _id: objectId }).maxTimeMS(10000);
  return game;
};

export const createNewPrivateGame = async () => {};
