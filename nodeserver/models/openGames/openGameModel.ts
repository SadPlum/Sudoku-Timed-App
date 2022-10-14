import { openGames } from "./openGameSchema";

export const allOpenGames = async () => {
  await openGames.find().exec((err, games) => {
    if (err) throw err;
    return games;
  });
};
