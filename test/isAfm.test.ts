import { describe, expect, it } from "vitest";
import { isAfm } from "../src/validators";

describe.concurrent("isAfm", () => {
  // Invalid AFMs
  it("000000000", () => {
    expect(isAfm("000000000")).toBe(false);
  });
  it("123456789", () => {
    expect(isAfm("123456789")).toBe(false);
  });

  // Valid AFMs
  it("094353733", () => {
    expect(isAfm("094353733")).toBe(true);
  });
  it("094282035", () => {
    expect(isAfm("094282035")).toBe(true);
  });
  it("997788278", () => {
    expect(isAfm("997788278")).toBe(true);
  });
});
