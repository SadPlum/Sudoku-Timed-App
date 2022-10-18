import express = require("express");
import {
  getPrivateGame,
  createNewPrivateGame,
  updateScorePrivateGame,
} from "../controllers/privateGames/privateGamesController";

const router = express.Router();

// BASE URL OF /api/v1/privategames

router.get("/:gamenumber", (req, res) => {
  getPrivateGame(req, res);
});
router.get("new", (req, res) => {
  createNewPrivateGame(req, res);
});
router.patch("/:gamenumber", (req, res) => {
  updateScorePrivateGame(req, res);
});

export { router as privateGameRouter };
