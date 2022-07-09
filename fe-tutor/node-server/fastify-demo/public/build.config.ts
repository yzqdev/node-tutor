import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/tool", "src/index"],
  // entries: ["src/"],
  rollup: {
    inlineDependencies: true,
  },
  clean: true,
  declaration: true,
});
