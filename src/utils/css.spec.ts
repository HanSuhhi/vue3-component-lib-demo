/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from "vitest";
import { css } from "./css";

describe("css.ts", () => {
  it("should return true if get a color", () => {
    expect(css.isColor("red")).toBe(true);
    expect(css.isColor("rgb(0,0,0)")).toBe(true);
  });
  it("should return false if get a error color", () => {
    expect(css.isColor("re")).toBe(false);
  });
  it("should return false if get number", () => {
    expect(css.isColor(123)).toBe(false);
  });
  it("should return css variable name", () => {
    expect(css.camelCaseNameToCssName("name")).toBe("--name");
    expect(css.camelCaseNameToCssName("nameName")).toBe("--name-name");
  });
});
