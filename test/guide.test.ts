import { expect, test } from 'playwright/test';
import * as allure from 'allure-js-commons';

function sum(a: number, b: number): number {
    return a + b;
}

test('basic sum', async () => {
  expect(sum(1, 2)).toBe(3);
});

test('loop sum', async () => {
    const testData: [number, number, number][] = [
      [1, 2, 3],
      [1, -1, 0],
      [0, 0, 0],
    ];
  
    for (const [a, b, expected] of testData) {
      expect(sum(a, b)).toBe(expected);
    }
});

const testCases: { x: number, y: number, expectedSum: number }[] = [
    { x: 1, y: 2, expectedSum: 3 },
    { x: 1, y: -1, expectedSum: 0 },
    { x: 0, y: 0, expectedSum: 0 },
];

testCases.forEach(({ x, y, expectedSum }) => {
    test(`the sum of ${x} and ${y} should be ${expectedSum}`, async () => {
      expect(sum(x, y)).toBe(expectedSum);
    });
});

testCases.forEach(({ x, y, expectedSum }) => {
  test(`sum of ${x} and ${y} should be ${expectedSum}`, async () => {
    await allure.parameter("x", x.toString());
    await allure.parameter("y", y.toString());
    await allure.parameter("expectedSum", expectedSum.toString());

    await expect(sum(x, y)).toBe(expectedSum);
  });
});