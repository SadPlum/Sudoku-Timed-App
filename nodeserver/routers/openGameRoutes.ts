import express = require("express");
import { getAllGames } from "../controllers/openGames/openGamesController";

const router = express.Router();

// BASE URL OF /api/v1/opengames

// Asks controller to get games for the front page
router.get("/", async (req, res) => {
  try {
    const games = await getAllGames();
    res.status(200).json({
      status: "success",
      data: games,
    });
  } catch (err) {
    console.log(err);
  }
});

// Asks controller to get open game based on the difficulty
router.get("/:difficulty", (req, res) => {});

// Asks router to send new entry for the open game of given difficulty
router.post("/:difficulty", (req, res) => {});

router.patch("/resetGames", (res, req) => {});

export { router as openGameRouter };
