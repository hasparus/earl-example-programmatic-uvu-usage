import { test } from "uvu";
async function runTests(): Promise<void> {
  // esbuild-plugin-import-glob doesn't seem to work for me, so you basically
  // list all test files here manually.
  await import("./addition.test");
  await import("./subtraction.test");
  // with webpack, you could use require.context() for this

  test.run();
}

runTests();
