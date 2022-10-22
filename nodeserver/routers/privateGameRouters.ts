import express = require("express");
import {
  getPrivateGame,
  createNewPrivateGame,
  getBoard,
  updatePrivateGame,
} from "../controllers/privateGames/privateGamesController";

const router = express.Router();

// BASE URL OF /api/v1/privategames

router.get("/new", (req, res) => getBoard(req, res));

router.post("/new/:gamenumber", (req, res) => {
  createNewPrivateGame(req, res);
});

router.get("/game/:id", (req, res) => {
  getPrivateGame(req, res);
});

router.patch("/game/:id", (req, res) => {
  updatePrivateGame(req, res);
});

router.get("*", (req, res) => {
  res.send("Cannot find request");
});
export { router as privateGameRouter };
