const express = require("express");
const app = express();
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const mongoose = require("mongoose");
const connectMongo = require("./functions/databaseConnect/databaseConnect.ts");
const openGameRouter = require("./routers/openGameRoutes.ts");

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

app.use("/api/1/opengames", openGameRouter);

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
