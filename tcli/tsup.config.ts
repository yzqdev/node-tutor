import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/"],
  splitting: false,
  sourcemap: true,
  minify: false,
  dts: true,
  clean: true,
});
