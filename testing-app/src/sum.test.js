import { expect, test } from "vitest";
import sum from "./sum";


// test(description, fn)
test("Sum of 1 and 2 should be 3", () => {
    expect(sum(1,2)).toBe(3);
}) // Description for the test case