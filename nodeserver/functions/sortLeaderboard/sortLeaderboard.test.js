const { sortLeaderboard } = require("./sortLeaderboard.ts");
const { data } = require("./sortLeaderboard-test-data.js");

describe("SortLeaderboard", () => {
  it("Sorts data in proper order", () => {
    console.log(data);
    // Takes in array, returns sorted array based on time.
    const test = sortLeaderboard(data.test.leaderboard);
    expect(test).toEqual(data.solved.leaderboard);
  });
});
