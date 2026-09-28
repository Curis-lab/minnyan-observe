import test from "node:test";
import assert from "node:assert/strict";

import { observe } from "../src/index.js";

test("observe returns function result", async () => {
  const result = await observe("test", async () => {
    return 123;
  });
  
  assert.equal(result, 123);
});

test("observe rethrows errors", async () => {
  await assert.rejects(
    observe("test-error", async () => {
      throw new Error("Something went wrong");
    }),

    {
      message: "Something went wrong",
    },
  );
});
