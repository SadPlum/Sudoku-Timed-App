import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

interface Game {
  difficulty: string;
  playBoard: number[][];
  gameBoard: number[][];
}

interface Player {
  name: string;
  time: string;
}

const gameSchema = new Schema<Game>({
  difficulty: { type: String, required: true, unique: true },
  playBoard: { type: [[Number]], required: true },
  gameBoard: { type: [[Number]], required: true },
});

const playerSchema = new Schema<Player>({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    minLength: 3,
    maxLength: 10,
  },
  time: { type: String, required: true, trim: true, match: /[0-9]*\.[0-9]+/ },
});

const leaderboardSchema = new Schema({
  leaderboard: { type: [playerSchema], required: true },
});

const openGameSchema = new Schema({
  id: { type: String, required: true, unique: true },
  difficulty: { type: String, required: true, unique: true },
  game: { type: gameSchema, required: true },
  leaderboard: { type: leaderboardSchema, required: true },
});

const OpenGames = mongoose.model("openGames", openGameSchema);

module.exports = OpenGames;
