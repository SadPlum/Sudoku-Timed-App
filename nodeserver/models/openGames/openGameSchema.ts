import mongoose from "mongoose";
import { Schema } from "mongoose";

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

    trim: true,
    minLength: 3,
    maxLength: 10,
  },
  time: { type: String, required: true, trim: true, match: /[0-9]*\.[0-9]+/ },
});

const openGameSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    difficulty: { type: String, required: true, unique: true },
    difficultyNum: { type: Number, required: true },
    game: { type: gameSchema, required: true },
    leaderboard: { type: [playerSchema], required: true },
  },
  { collection: "openGames" }
);

export const OpenGames = mongoose.model(
  "OpenGame",
  openGameSchema,
  "openGames"
);
