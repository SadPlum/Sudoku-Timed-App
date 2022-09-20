const connectMongo = require("./databaseConnect.ts");
const mongoose = require("mongoose");

it("Connects to database", async () => {
  const test = await connectMongo();
  expect(test).toBe(true);
  mongoose.connection.close();
});
