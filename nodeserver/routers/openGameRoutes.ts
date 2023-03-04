import express = require("express");
import {
  getAllGames,
  getGame,
  updateGame,
} from "../controllers/openGames/openGamesController";

const router = express.Router();

// BASE URL OF /api/v1/opengames

// Asks controller to get games for the front page
router.get("/", (req, res) => getAllGames(req, res));

//
router.get("/game/:_id", (req, res) => getGame(req, res));

router.patch("/game/:_id", (req, res) => {
  updateGame(req, res);
});

// Resets games each 2 weeks
router.patch("/resetGames", (res, req) => {});

export { router as openGameRouter };
