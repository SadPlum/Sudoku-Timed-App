const { allOpenGames } = require("../../models/openGames/openGameModel.ts");

const getAllGames = () => {
  return allOpenGames();
};

module.exports = getAllGames;
