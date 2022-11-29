import { describe, expect, it } from "vitest";
import { isId } from "../src/validators";

describe.concurrent("isId", () => {
  it("ΑΡ123456", () => {
    expect(isId("ΑΡ123456")).toBe(true);
  });
});
