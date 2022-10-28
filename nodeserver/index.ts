import express = require("express");
import xss = require("xss-clean");
import mongoSanitize = require("express-mongo-sanitize");
import mongoose = require("mongoose");
import cors = require("cors");
import { connectMongo } from "./functions/databaseConnect/databaseConnect";
import { openGameRouter } from "./routers/openGameRoutes";
import { privateGameRouter } from "./routers/privateGameRouters";
const app = express();

app.use(cors());
// sanitizes potential inputs.
app.use(xss());
// prevents noSQL injections
app.use(mongoSanitize());

// To easily access server for development
app.get("/", (req, res, next) => {
  res.send("Sudoku Server");
});

// Connect to port 5000 and connect to DB
const server = app.listen(5000, () => {
  console.log(`Server running at localhost:5000/`);
  connectMongo();
});

app.use("/api/v1/opengames", openGameRouter);
app.use("/api/v1/privategames", privateGameRouter);

// Close the connection on close
process.on("exit", () => {
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
  server.close();
});
