const { generateRandomNums } = require("./generateRandomNums");

// test may fail in extremely unlikely circumstances. returned values are randomized
describe("generateRandomNums", () => {
  test("generateRandomNums should create different numbers", () => {
    const test1 = generateRandomNums();
    const test2 = generateRandomNums();
    expect(test1).not.toEqual(test2);
  });

  test("generateRandomNums should have 9 elements", () => {
    expect(generateRandomNums()).toHaveLength(9);
  });

  test("generateRandomNums should not equal [1,2,3,4,5,6,7,8,9]", () => {
    expect(generateRandomNums()).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("generateRandomNums should have numbers 1 through 9", () => {
    const test1 = generateRandomNums();
    let check = test1.sort((a, b) => a - b);
    expect(check).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
