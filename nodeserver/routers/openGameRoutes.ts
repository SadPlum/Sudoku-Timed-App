import express = require("express");
import {
  getAllGames,
  getGame,
} from "../controllers/openGames/openGamesController";

const router = express.Router();

// BASE URL OF /api/v1/opengames

// Asks controller to get games for the front page
router.get("/", (req, res) => getAllGames(req, res));

// Asks controller to get open game based on the difficulty
router.get("/:difficulty", (req, res) => getGame(req, res));

// Resets games each 2 weeks
router.patch("/resetGames", (res, req) => {});

export { router as openGameRouter };
