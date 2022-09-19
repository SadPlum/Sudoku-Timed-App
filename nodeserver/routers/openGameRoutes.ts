const express = require("express");
const router = express.Router();
const getAllGames = require("../controllers/openGames/openGamesController.ts");

// BASE URL OF /api/v1/opengames

// Asks controller to get games for the front page
router.get("/", (req, res) => {
  const data = getAllGames();
  res.body = JSON.stringify(data);
});

// Asks controller to get open game based on the difficulty
router.get("/:difficulty", (req, res) => {});

// Asks router to send new entry for the open game of given difficulty
router.post("/:difficulty", (req, res) => {});

router.patch("/resetGames", (res, req) => {});

module.exports = router;
