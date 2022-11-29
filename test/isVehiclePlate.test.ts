import { describe, expect, it } from "vitest";
import { isVehiclePlate } from "../src/validators";

describe.concurrent("isVehiclePlate", () => {
  it("123456789", () => {
    expect(isVehiclePlate("123456789")).toBe(false);
  });
  it("ΧΑΟ-2222", () => {
    expect(isVehiclePlate("ΧΑΟ-2222")).toBe(true);
  });
  it("ΙΖΒ-4320", () => {
    expect(isVehiclePlate("ΙΖΒ-4320")).toBe(true);
  });
  it("ΙΖΒ-111", () => {
    expect(isVehiclePlate("ΙΖΒ-111")).toBe(true);
  });
});
