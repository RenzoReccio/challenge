import { findPairWithSum } from "../app/index";

describe("findPairWithSum", () => {
  test("should find the first pair that sums to N", () => {
    expect(findPairWithSum([2, 5, 8, 14, 0], 10)).toEqual([2, 8]);
    expect(findPairWithSum([1, 3, 7, 9], 10)).toEqual([3, 7]);
  });

  test("should return null if no pair is found", () => {
    expect(findPairWithSum([1, 2, 3], 10)).toBeNull();
  });
});
