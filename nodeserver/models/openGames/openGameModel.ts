import { OpenGames } from "./openGameSchema";

export const allOpenGames = () => {
  return OpenGames.find({});
};
