import { test } from "uvu";
import { expect } from "earljs";

test("addition should return the sum of two numbers", () => {
  expect(1 + 2).toEqual(3);
});

test.skip("skipped", () => {
  expect(true).toEqual(false);
});
