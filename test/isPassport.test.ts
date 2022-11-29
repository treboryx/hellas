import { describe, expect, it } from "vitest";
import { isPassport } from "../src/validators";

describe.concurrent("isPassport", () => {
  it("AY1234567", () => {
    expect(isPassport("AY1234567")).toBe(true);
  });
});
