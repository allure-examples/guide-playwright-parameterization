import { expect, test } from "playwright/test";
import * as allure from "allure-js-commons";

const sum = (a, b) => {
  return a + b;
};

test("basic sum", async () => {
  expect(sum(1, 2)).toBe(3);
});

test("loop sum", async () => {
  [
    [1, 2, 3],
    [1, -1, 0],
    [0, 0, 0],
  ].forEach(testData => {
    expect(sum(testData[0], testData[1])).toBe(testData[2]);
  });
});

[
  { x: 1, y: 2, expectedSum: 3 },
  { x: 1, y: -1, expectedSum: 0 },
  { x: 0, y: 0, expectedSum: 0 },
].forEach(({ x, y, expectedSum }) => {
  test(`the sum of ${x} and ${y} should be ${expectedSum}`, async () => {
    await expect(sum(x, y)).toBe(expectedSum);
  });
});

[
  { x: 1, y: 2, expectedSum: 3 },
  { x: 1, y: -1, expectedSum: 0 },
  { x: 0, y: 0, expectedSum: 0 },
].forEach(({ x, y, expectedSum }) => {
  test(`sum of ${x} and ${y} should be ${expectedSum}`, async () => {
    await allure.parameter("x", x);
    await allure.parameter("y", y);
    await allure.parameter("expectedSum", expectedSum);

    await expect(sum(x, y)).toBe(expectedSum);
  });
});