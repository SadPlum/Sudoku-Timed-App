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
  difficulty: { type: String, required: true },
  playBoard: { type: [[Number]], required: true },
  gameBoard: { type: [[Number]], required: true },
});

// const playerSchema = new Schema<Player>({
//   name: {
//     type: String,
//     required: true,
//     uppercase: true,
//     trim: true,
//     minLength: 3,
//     maxLength: 10,
//   },
//   time: { type: String, required: true, trim: true, match: /[0-9]*\:[0-9]+/ },
// });

const leaderboardSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    minLength: 3,
    maxLength: 10,
  },
  time: { type: String, required: true, trim: true, match: /[0-9]*\:[0-9]+/ },
});

const privateGameSchema = new Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true },
    id: { type: Number, required: true, unique: true },
    difficulty: { type: String, required: true },
    game: { type: gameSchema, required: true },
    leaderboard: { type: [leaderboardSchema], required: true },
  },
  { collection: "privateGames" }
);

export const PrivateGames = mongoose.model(
  "PrivateGames",
  privateGameSchema,
  "privateGames"
);
