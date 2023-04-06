import { describe, expect, it } from "vitest";
import { isPhone } from "../src/validators";

describe.concurrent("isPhone", () => {
  it("+30 694 123 4567", () => {
    expect(isPhone("+30 694 123 4567")).toBe(true);
  });
  it("0030 694 123 4567", () => {
    expect(isPhone("0030 694 123 4567")).toBe(true);
  });

  it("694 123 4567", () => {
    expect(isPhone("694 123 4567")).toBe(true);
  });

  it("694 123 456", () => {
    expect(isPhone("694 123 456")).toBe(false);
  });

  it("00302101234567", () => {
    expect(isPhone("00302101234567")).toBe(true);
  });

  it("00302101234567", () => {
    expect(isPhone("00302101234567", "mobile")).toBe(false);
  });
});
