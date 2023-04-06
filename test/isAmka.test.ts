import { describe, expect, it } from "vitest";
import { isAmka } from "../src/validators";

// TODO: Find an algorithmically valid AMKA to test
describe.concurrent("isAmka", () => {
  it("12345678", () => {
    expect(isAmka("12345678")).toBe(false);
  });
  it("01013099999", () => {
    expect(isAmka("01013099999")).toBe(false);
  });
  it("16099001234", () => {
    expect(isAmka("16099001234")).toBe(false);
  });

  it("00000000000", () => {
    expect(isAmka("00000000000")).toBe(false);
  });
});
