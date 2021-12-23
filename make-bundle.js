// @ts-check

const { build } = require("esbuild");

void build({
  bundle: true,
  entryPoints: ["./src/main.ts"],
  outfile: "out.js",
  platform: "node",
})
  .then((res) => console.log("ok", res))
  .catch((err) => console.error("fail", err));
