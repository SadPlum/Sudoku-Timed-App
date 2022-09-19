const openGame = require("./openGameSchema.ts");

const allOpenGames = async () => await openGame.find();

module.exports = allOpenGames;
