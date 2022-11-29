import { describe, expect, it } from "vitest";
import { isPostalCode } from "../src/validators";

describe.concurrent("isPostalCode", () => {
  it("10021", () => {
    expect(isPostalCode("10021")).toBe(true);
  });
  it("34007", () => {
    expect(isPostalCode("34007")).toBe(true);
  });
  it("85106", () => {
    expect(isPostalCode("85106")).toBe(true);
  });
  it("8510", () => {
    expect(isPostalCode("8510")).toBe(false);
  });
  it("as510", () => {
    expect(isPostalCode("as510")).toBe(false);
  });
});
