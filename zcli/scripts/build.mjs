import * as esbuild from "esbuild";

await esbuild.build({
  bundle: true,
  entryPoints: ["index.ts"],
  outfile: "dist/zcli.cjs",
  format: "cjs",
  platform: "node",
  target: "node16",
});
