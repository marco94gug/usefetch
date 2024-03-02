import { expect, test } from "vitest";
import { foobarFn } from "../index";

test("foobar run", () => {
  expect(foobarFn("bar")).toBe("foobar");
});
