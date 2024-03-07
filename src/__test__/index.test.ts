import { expect, test } from "vitest";
import { useFetch } from "../index";

const globalObject = typeof global !== "undefined" ? global : window;

globalObject.fetch = async (url: RequestInfo | URL, options) => {
  return {
    async json() {
      return { data: "foobar" };
    },
    ok: true,
    headers: new Headers({
      "Content-Type": "application/json",
      "Custom-Header": "custom-value",
    }),
  } as Response;
};

test("useFetch get", async () => {
  const result = await useFetch("test-path", {
    baseURL: "https://test-url.com",
    params: {
      test: "test-1",
    },
  });

  expect(result.data).toEqual({ data: "foobar" });
});
