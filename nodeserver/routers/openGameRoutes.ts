import express = require("express");
import { getAllGames } from "../controllers/openGames/openGamesController";

const router = express.Router();

// BASE URL OF /api/v1/opengames

// Asks controller to get games for the front page
router.get("/", (req, res) => {
  console.log("api/v1/opengames", "/");
  const data = getAllGames();
  console.log(data);
  res.send(data);
  res.body = JSON.stringify(data);
});

// Asks controller to get open game based on the difficulty
router.get("/:difficulty", (req, res) => {});

// Asks router to send new entry for the open game of given difficulty
router.post("/:difficulty", (req, res) => {});

router.patch("/resetGames", (res, req) => {});

export { router as openGameRouter };
